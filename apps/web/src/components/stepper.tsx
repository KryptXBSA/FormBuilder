"use client"
import type React from 'react';
import { H4 } from '@/components/ui/heading-with-anchor';
import { cn } from '@/lib/utils';
import { CodeHighlight } from './code-highlight';

interface StepperProps {
  children?: React.ReactNode;
  title?: string;
  step?: number;
}
const Stepper = ({ title, children, step }: StepperProps) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 p-3 text-primary dark:text-primary-foreground">
          {step}
        </span>
        <H4>{title}</H4>
      </div>
      <div className="my-3 ml-5 border-l-2 border-l-gray-200 pl-8">{children}</div>
    </div>
  );
};

interface SteppersBaseProps {
  steps?: Omit<StepperProps, 'step'>[];
  className?: string;
  withEnd?: boolean;
}

interface SteppersWithInstallProps extends SteppersBaseProps {
  withInstall: true;
  codePath: string;
  installScript?: string;
}

interface SteppersWithoutInstallProps extends SteppersBaseProps {
  withInstall?: false;
}

type SteppersProps = SteppersWithInstallProps | SteppersWithoutInstallProps;

export const Steppers = (props: SteppersProps) => {
  const { steps, className, withEnd, withInstall } = props;

  let installCode = '';
  if (withInstall && props.codePath) {
    installCode = installCodee;
  }
  const withInstallOffset = withInstall ? (props.installScript ? 2 : 1) : 0;
  return (
    <>
      <div className={cn(className)}>
        {withInstall && (
          <>
            {props.installScript && (
              <Stepper
                title="Install the package if you do not have it."
                step={withInstallOffset - 1}
              >
                <CodeHighlight lang="shell" code={props.installScript} />
              </Stepper>
            )}
            <Stepper
              title="Copy and paste the following code into your project."
              step={withInstallOffset}
            >
              <CodeHighlight code={installCode} withExpand />
            </Stepper>
          </>
        )}
        {steps?.map((props, index) => (
          <Stepper key={props.title} {...props} step={index + 1 + withInstallOffset} />
        ))}
        {withEnd && (
          <Stepper
            title="Update the import paths to match your project setup."
            step={(steps?.length || 0) + 1 + withInstallOffset}
          />
        )}
      </div>
    </>
  );
};

const installCodee=`import { Button, buttonVariants } from '@/components/ui/button';
import type { CalendarProps } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { add, format } from 'date-fns';
import { type Locale, enUS } from 'date-fns/locale';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Clock } from 'lucide-react';
import * as React from 'react';
import { useImperativeHandle, useRef } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DayPicker } from 'react-day-picker';

// ---------- utils start ----------
/**
 * regular expression to check for valid hour format (01-23)
 */
function isValidHour(value: string) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(value);
}

/**
 * regular expression to check for valid 12 hour format (01-12)
 */
function isValid12Hour(value: string) {
  return /^(0[1-9]|1[0-2])$/.test(value);
}

/**
 * regular expression to check for valid minute format (00-59)
 */
function isValidMinuteOrSecond(value: string) {
  return /^[0-5][0-9]$/.test(value);
}

type GetValidNumberConfig = { max: number; min?: number; loop?: boolean };

function getValidNumber(value: string, { max, min = 0, loop = false }: GetValidNumberConfig) {
  let numericValue = parseInt(value, 10);

  if (!Number.isNaN(numericValue)) {
    if (!loop) {
      if (numericValue > max) numericValue = max;
      if (numericValue < min) numericValue = min;
    } else {
      if (numericValue > max) numericValue = min;
      if (numericValue < min) numericValue = max;
    }
    return numericValue.toString().padStart(2, '0');
  }

  return '00';
}

function getValidHour(value: string) {
  if (isValidHour(value)) return value;
  return getValidNumber(value, { max: 23 });
}

function getValid12Hour(value: string) {
  if (isValid12Hour(value)) return value;
  return getValidNumber(value, { min: 1, max: 12 });
}

function getValidMinuteOrSecond(value: string) {
  if (isValidMinuteOrSecond(value)) return value;
  return getValidNumber(value, { max: 59 });
}

type GetValidArrowNumberConfig = {
  min: number;
  max: number;
  step: number;
};

function getValidArrowNumber(value: string, { min, max, step }: GetValidArrowNumberConfig) {
  let numericValue = parseInt(value, 10);
  if (!Number.isNaN(numericValue)) {
    numericValue += step;
    return getValidNumber(String(numericValue), { min, max, loop: true });
  }
  return '00';
}

function getValidArrowHour(value: string, step: number) {
  return getValidArrowNumber(value, { min: 0, max: 23, step });
}

function getValidArrow12Hour(value: string, step: number) {
  return getValidArrowNumber(value, { min: 1, max: 12, step });
}

function getValidArrowMinuteOrSecond(value: string, step: number) {
  return getValidArrowNumber(value, { min: 0, max: 59, step });
}

function setMinutes(date: Date, value: string) {
  const minutes = getValidMinuteOrSecond(value);
  date.setMinutes(parseInt(minutes, 10));
  return date;
}

function setSeconds(date: Date, value: string) {
  const seconds = getValidMinuteOrSecond(value);
  date.setSeconds(parseInt(seconds, 10));
  return date;
}

function setHours(date: Date, value: string) {
  const hours = getValidHour(value);
  date.setHours(parseInt(hours, 10));
  return date;
}

function set12Hours(date: Date, value: string, period: Period) {
  const hours = parseInt(getValid12Hour(value), 10);
  const convertedHours = convert12HourTo24Hour(hours, period);
  date.setHours(convertedHours);
  return date;
}

type TimePickerType = 'minutes' | 'seconds' | 'hours' | '12hours';
type Period = 'AM' | 'PM';

function setDateByType(date: Date, value: string, type: TimePickerType, period?: Period) {
  switch (type) {
    case 'minutes':
      return setMinutes(date, value);
    case 'seconds':
      return setSeconds(date, value);
    case 'hours':
      return setHours(date, value);
    case '12hours': {
      if (!period) return date;
      return set12Hours(date, value, period);
    }
    default:
      return date;
  }
}

function getDateByType(date: Date | null, type: TimePickerType) {
  if (!date) return '00';
  switch (type) {
    case 'minutes':
      return getValidMinuteOrSecond(String(date.getMinutes()));
    case 'seconds':
      return getValidMinuteOrSecond(String(date.getSeconds()));
    case 'hours':
      return getValidHour(String(date.getHours()));
    case '12hours':
      return getValid12Hour(String(display12HourValue(date.getHours())));
    default:
      return '00';
  }
}

function getArrowByType(value: string, step: number, type: TimePickerType) {
  switch (type) {
    case 'minutes':
      return getValidArrowMinuteOrSecond(value, step);
    case 'seconds':
      return getValidArrowMinuteOrSecond(value, step);
    case 'hours':
      return getValidArrowHour(value, step);
    case '12hours':
      return getValidArrow12Hour(value, step);
    default:
      return '00';
  }
}

/**
 * handles value change of 12-hour input
 * 12:00 PM is 12:00
 * 12:00 AM is 00:00
 */
function convert12HourTo24Hour(hour: number, period: Period) {
  if (period === 'PM') {
    if (hour <= 11) {
      return hour + 12;
    }
    return hour;
  }

  if (period === 'AM') {
    if (hour === 12) return 0;
    return hour;
  }
  return hour;
}

/**
 * time is stored in the 24-hour form,
 * but needs to be displayed to the user
 * in its 12-hour representation
 */
function display12HourValue(hours: number) {
`
