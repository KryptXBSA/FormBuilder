"use client";
import React from "react";
import { useAppState } from "@/state/state";
import { CodeHighlight } from "@/components/code-highlight";
import { CodeBlockCommand } from "@/components/code-block-command";
import { Steppers } from "@/components/stepper";

export function Code() {
	const { currentForm } = useAppState();

	return (
		<div className="flex flex-col">
			<h3 className="scroll-m-20 font-semibold text-2xl tracking-tight">
				Prerequisites
			</h3>
			<p>First make sure you have </p>
			<Steppers
				withInstall
				codePath="components/ui/progress-with-value.tsx"
				withEnd
				installScript="npm i @radix-ui/react-progress"
			/>
			<CodeBlockCommand
				__npmCommand__="aa aa aa"
				__bunCommand__="ad asd asd"
				__pnpmCommand__="asd d d"
				__yarnCommand__="al dnd a"
			/>
		</div>
	);
}

const codee = `'use client';
import React, { useState } from 'react';
import { DateTimePicker } from '@/components/ui/datetime-picker';
import { InlineCode } from '@/components/ui/inline-code';
import { format } from 'date-fns';
// I put it outside the component to avoid re-creating the date object every time the component re-renders.
const DefaultDate = new Date();
DefaultDate.setMonth(DefaultDate.getMonth() - 3);
DefaultDate.setHours(13, 14, 0, 0);

const DatetimePickerInitMonth = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div>
      <p>
        The example of default popup value is{' '}
        <InlineCode>
          current month - 3 = {DefaultDate.getMonth() + 1} and manually set the time to 13:14:00
        </InlineCode>{' '}
        which is <InlineCode>{format(DefaultDate, 'yyyy/MM/dd hh:mm:ss b')}</InlineCode> when popup
        the calendar.
        <br />
        You can set the month by giving <InlineCode>the Date</InlineCode> to{' '}
        <InlineCode>defaultPopupValue</InlineCode> prop.
      </p>
      <DateTimePicker
        value={date}
        defaultPopupValue={DefaultDate}
        // defaultPopupValue={new Date(2025, 0, 1)} // You can set the month by giving the Date here to initMonth prop.
        onChange={setDate}
        className="w-[280px]"
      />
    </div>
  );
};

export default DatetimePickerInitMonth;
`;
