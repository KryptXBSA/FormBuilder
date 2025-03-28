import type { FormFramework, FormSchema } from "formbuilder-core";
// Updated Template type to align with FormSchema
export type Template = {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    frameworks: FormFramework[];
    fieldCount: number;
    // These fields are needed for preview
    formSchema: {
        [key in FormFramework]?: FormSchema<key>;
    };
};

// Sample template data with form schemas
export const TEMPLATES: Template[] = [
    {
        id: "contact-form",
        title: "Contact Form",
        description: "A simple contact form with name, email, and message fields.",
        image: "/templates/prev1.png",
        category: "Basic",
        frameworks: ["next", "vue"],
        fieldCount: 3,
        formSchema: {
            next: {
                id: "contact-form",
                name: "Contact Form",
                framework: "next",
                fields: [
                    [
                        {
                            id: "name-field",
                            key: "name",
                            label: "Name",
                            kind: "text",
                            description: "Your full name",
                            placeholder: "Jane Doe",
                            variant: "next-shadcn-text-input",
                            required: true,
                            validation: {},
                        },
                    ],
                    [
                        {
                            id: "email-field",
                            key: "email",
                            label: "Email",
                            kind: "text",
                            description: "Your email address",
                            placeholder: "jane@example.com",
                            variant: "next-shadcn-text-input",
                            required: true,
                            validation: { isEmail: true },
                        },
                    ],
                    [
                        {
                            id: "message-field",
                            key: "message",
                            label: "Message",
                            kind: "text",
                            description: "Your message",
                            placeholder: "How can we help you?",
                            variant: "next-shadcn-text-textarea",
                            required: true,
                            validation: {},
                        },
                    ],
                ],
                settings: {
                    importAliasComponents: "@/components",
                    importAliasUtils: "@/lib/utils",
                },
            },
            vue: {
                id: "contact-form",
                name: "Contact Form",
                framework: "vue",
                fields: [
                    [
                        {
                            id: "name-field",
                            key: "name",
                            label: "Name",
                            kind: "text",
                            description: "Your full name",
                            placeholder: "Jane Doe",
                            variant: "vue-shadcn-text-input",
                            required: true,
                            validation: {},
                        },
                    ],
                    [
                        {
                            id: "email-field",
                            key: "email",
                            label: "Email",
                            kind: "text",
                            description: "Your email address",
                            placeholder: "jane@example.com",
                            variant: "vue-shadcn-text-input",
                            required: true,
                            validation: { isEmail: true },
                        },
                    ],
                    [
                        {
                            id: "message-field",
                            key: "message",
                            label: "Message",
                            kind: "text",
                            description: "Your message",
                            placeholder: "How can we help you?",
                            variant: "vue-shadcn-text-textarea",
                            required: true,
                            validation: {},
                        },
                    ],
                ],
                settings: {
                    importAliasComponents: "@/components",
                    importAliasUtils: "@/lib/utils",
                },
            },
        },
    },
    {
        id: "survey",
        title: "Customer Survey",
        description:
            "Collect feedback from your customers with this comprehensive survey template.",
        image: "/templates/prev1.png",
        category: "Business",
        frameworks: ["next", "svelte", "vue"],
        fieldCount: 8,
        formSchema: {
            next: {
                id: "survey",
                name: "Customer Survey",
                framework: "next",
                fields: [
                    [
                        {
                            id: "name-field",
                            key: "name",
                            label: "Name",
                            kind: "text",
                            description: "Your full name",
                            placeholder: "Jane Doe",
                            variant: "next-shadcn-text-input",
                            required: true,
                            validation: {},
                        },
                    ],
                    [
                        {
                            id: "email-field",
                            key: "email",
                            label: "Email",
                            kind: "text",
                            description: "Your email address",
                            placeholder: "jane@example.com",
                            variant: "next-shadcn-text-input",
                            required: true,
                            validation: { isEmail: true },
                        },
                    ],
                    [
                        {
                            id: "satisfaction",
                            key: "satisfaction",
                            label: "Overall Satisfaction",
                            kind: "number",
                            description: "Rate your satisfaction from 1-10",
                            variant: "next-shadcn-number-slider",
                            validation: { min: 1, max: 10 },
                        },
                    ],
                    [
                        {
                            id: "recommend",
                            key: "recommend",
                            label: "Would you recommend us?",
                            kind: "boolean",
                            description: "Would you recommend our product to others?",
                            variant: "next-shadcn-boolean-checkbox",
                        },
                    ],
                    [
                        {
                            id: "product",
                            key: "product",
                            label: "Product Used",
                            kind: "enum",
                            description: "Which product are you providing feedback for?",
                            variant: "next-shadcn-enum-select",
                            enumValues: [
                                { id: "product-a", label: "Product A", value: "product-a" },
                                { id: "product-b", label: "Product B", value: "product-b" },
                                { id: "product-c", label: "Product C", value: "product-c" },
                            ],
                        },
                    ],
                    [
                        {
                            id: "visit-date",
                            key: "visitDate",
                            label: "Date of Visit",
                            kind: "date",
                            description: "When did you use our product?",
                            variant: "next-shadcn-date-date",
                        },
                    ],
                    [
                        {
                            id: "features",
                            key: "features",
                            label: "Features Used",
                            kind: "enum",
                            description: "Select all features you've used",
                            variant: "next-shadcn-enum-combobox",
                            enumValues: [
                                { id: "feature-1", label: "Feature 1", value: "feature-1" },
                                { id: "feature-2", label: "Feature 2", value: "feature-2" },
                                { id: "feature-3", label: "Feature 3", value: "feature-3" },
                            ],
                        },
                    ],
                    [
                        {
                            id: "comments",
                            key: "comments",
                            label: "Additional Comments",
                            kind: "text",
                            description: "Any other feedback for us?",
                            placeholder: "Share your thoughts...",
                            variant: "next-shadcn-text-textarea",
                            validation: {},
                        },
                    ],
                ],
                settings: {
                    importAliasComponents: "@/components",
                    importAliasUtils: "@/lib/utils",
                },
            },
            // Similar structure for svelte and vue implementations
            svelte: {
                id: "survey",
                name: "Customer Survey",
                framework: "svelte",
                fields: [
                    // Simplified for brevity - similar to next version but with svelte variants
                    [
                        {
                            id: "name-field",
                            key: "name",
                            label: "Name",
                            kind: "text",
                            description: "Your full name",
                            placeholder: "Jane Doe",
                            variant: "svelte-shadcn-text-input",
                            required: true,
                            validation: {},
                        },
                    ],
                    // ...other fields adapted for svelte
                ],
                settings: {
                    importAliasComponents: "@/components",
                    importAliasUtils: "@/lib/utils",
                },
            },
            vue: {
                id: "survey",
                name: "Customer Survey",
                framework: "vue",
                fields: [
                    // Simplified for brevity - similar to next version but with vue variants
                    [
                        {
                            id: "name-field",
                            key: "name",
                            label: "Name",
                            kind: "text",
                            description: "Your full name",
                            placeholder: "Jane Doe",
                            variant: "vue-shadcn-text-input",
                            required: true,
                            validation: {},
                        },
                    ],
                    // ...other fields adapted for vue
                ],
                settings: {
                    importAliasComponents: "@/components",
                    importAliasUtils: "@/lib/utils",
                },
            },
        },
    },
    // ... other templates with similar structure
    {
        id: "event-registration",
        title: "Event Registration",
        description:
            "Allow users to register for your events with this registration form.",
        image: "/templates/prev1.png",
        category: "Events",
        frameworks: ["next"],
        fieldCount: 5,
        formSchema: {
            next: {
                id: "event-registration",
                name: "Event Registration",
                framework: "next",
                fields: [
                    // Basic form fields for event registration
                    [
                        {
                            id: "name-field",
                            key: "name",
                            label: "Full Name",
                            kind: "text",
                            description: "Your full name as it should appear on your badge",
                            placeholder: "Jane Doe",
                            variant: "next-shadcn-text-input",
                            required: true,
                            validation: {},
                        },
                    ],
                    [
                        {
                            id: "email-field",
                            key: "email",
                            label: "Email",
                            kind: "text",
                            description: "We'll send confirmation details to this email",
                            placeholder: "jane@example.com",
                            variant: "next-shadcn-text-input",
                            required: true,
                            validation: { isEmail: true },
                        },
                    ],
                    [
                        {
                            id: "phone-field",
                            key: "phone",
                            label: "Phone Number",
                            kind: "number",
                            description: "For emergency contact during the event",
                            variant: "next-shadcn-number-phone",
                            required: true,
                            validation: {},
                        },
                    ],
                    [
                        {
                            id: "ticket-type",
                            key: "ticketType",
                            label: "Ticket Type",
                            kind: "enum",
                            description: "Select your ticket package",
                            variant: "next-shadcn-enum-radio",
                            enumValues: [
                                { id: "standard", label: "Standard", value: "standard" },
                                { id: "vip", label: "VIP", value: "vip" },
                                { id: "group", label: "Group (5+)", value: "group" },
                            ],
                        },
                    ],
                    [
                        {
                            id: "attendance-dates",
                            key: "attendanceDates",
                            label: "Attendance Dates",
                            kind: "date",
                            description: "Select the dates you'll be attending",
                            variant: "next-shadcn-date-daterange",
                        },
                    ],
                ],
                settings: {
                    importAliasComponents: "@/components",
                    importAliasUtils: "@/lib/utils",
                },
            },
        },
    },
    {
        id: "job-application",
        title: "Job Application Form",
        description: "A comprehensive job application form with personal details, education, and experience sections.",
        image: "/templates/prev1.png",
        category: "Professional",
        frameworks: ["next", "vue", "svelte"],
        fieldCount: 9,
        formSchema: {
            next: {
                id: "job-application",
                name: "Job Application Form",
                framework: "next",
                fields: [
                    [
                        {
                            id: "form-heading",
                            key: "formHeading",
                            label: "Job Application",
                            kind: "heading",
                            variant: "next-shadcn-heading-simple",
                        }
                    ],
                    [
                        {
                            id: "first-name-field",
                            key: "firstName",
                            label: "First Name",
                            kind: "text",
                            description: "Your first name",
                            placeholder: "Jane",
                            variant: "next-shadcn-text-input",
                            required: true,
                            validation: {},
                        },
                        {
                            id: "last-name-field",
                            key: "lastName",
                            label: "Last Name",
                            kind: "text",
                            description: "Your last name",
                            placeholder: "Doe",
                            variant: "next-shadcn-text-input",
                            required: true,
                            validation: {},
                        }
                    ],
                    [
                        {
                            id: "email-field",
                            key: "email",
                            label: "Email Address",
                            kind: "text",
                            description: "Your contact email",
                            placeholder: "jane.doe@example.com",
                            variant: "next-shadcn-text-input",
                            required: true,
                            validation: { isEmail: true },
                        },
                        {
                            id: "phone-field",
                            key: "phone",
                            label: "Phone Number",
                            kind: "number",
                            description: "Your contact phone number",
                            variant: "next-shadcn-number-phone",
                            required: true,
                            validation: {},
                        }
                    ],
                    [
                        {
                            id: "position-field",
                            key: "position",
                            label: "Position Applied For",
                            kind: "enum",
                            description: "Select the position you're applying for",
                            variant: "next-shadcn-enum-select",
                            required: true,
                            enumValues: [
                                { id: "developer", label: "Software Developer", value: "developer" },
                                { id: "designer", label: "UX/UI Designer", value: "designer" },
                                { id: "manager", label: "Product Manager", value: "manager" },
                                { id: "marketing", label: "Marketing Specialist", value: "marketing" }
                            ],
                        }
                    ],
                    [
                        {
                            id: "experience-field",
                            key: "experience",
                            label: "Years of Experience",
                            kind: "number",
                            description: "How many years of relevant experience do you have?",
                            variant: "next-shadcn-number-slider",
                            validation: { min: 0, max: 20 },
                        }
                    ],
                    [
                        {
                            id: "start-date-field",
                            key: "availableStartDate",
                            label: "Available Start Date",
                            kind: "date",
                            description: "When can you start working?",
                            variant: "next-shadcn-date-date",
                            required: true,
                        }
                    ],
                    [
                        {
                            id: "remote-work-field",
                            key: "remoteWork",
                            label: "Available for Remote Work",
                            kind: "boolean",
                            description: "Are you willing to work remotely?",
                            variant: "next-shadcn-boolean-switch",
                        },
                        {
                            id: "relocation-field",
                            key: "relocation",
                            label: "Willing to Relocate",
                            kind: "boolean",
                            description: "Are you willing to relocate if necessary?",
                            variant: "next-shadcn-boolean-checkbox",
                        }
                    ],
                    [
                        {
                            id: "cover-letter-field",
                            key: "coverLetter",
                            label: "Cover Letter",
                            kind: "text",
                            description: "Tell us why you're the perfect fit for this position",
                            placeholder: "I am writing to express my interest in...",
                            variant: "next-shadcn-text-textarea",
                            required: true,
                            validation: { min: 100 },
                        }
                    ]
                ],
                settings: {
                    importAliasComponents: "@/components",
                    importAliasUtils: "@/lib/utils",
                },
            },
            vue: {
                id: "job-application",
                name: "Job Application Form",
                framework: "vue",
                fields: [
                    [
                        {
                            id: "form-heading",
                            key: "formHeading",
                            label: "Job Application",
                            kind: "heading",
                            variant: "vue-shadcn-heading-simple",
                        }
                    ],
                    [
                        {
                            id: "first-name-field",
                            key: "firstName",
                            label: "First Name",
                            kind: "text",
                            description: "Your first name",
                            placeholder: "Jane",
                            variant: "vue-shadcn-text-input",
                            required: true,
                            validation: {},
                        },
                        {
                            id: "last-name-field",
                            key: "lastName",
                            label: "Last Name",
                            kind: "text",
                            description: "Your last name",
                            placeholder: "Doe",
                            variant: "vue-shadcn-text-input",
                            required: true,
                            validation: {},
                        }
                    ],
                    [
                        {
                            id: "email-field",
                            key: "email",
                            label: "Email Address",
                            kind: "text",
                            description: "Your contact email",
                            placeholder: "jane.doe@example.com",
                            variant: "vue-shadcn-text-input",
                            required: true,
                            validation: { isEmail: true },
                        }
                    ],
                    [
                        {
                            id: "position-field",
                            key: "position",
                            label: "Position Applied For",
                            kind: "enum",
                            description: "Select the position you're applying for",
                            variant: "vue-shadcn-enum-select",
                            required: true,
                            enumValues: [
                                { id: "developer", label: "Software Developer", value: "developer" },
                                { id: "designer", label: "UX/UI Designer", value: "designer" },
                                { id: "manager", label: "Product Manager", value: "manager" },
                                { id: "marketing", label: "Marketing Specialist", value: "marketing" }
                            ],
                        }
                    ],
                    [
                        {
                            id: "experience-field",
                            key: "experience",
                            label: "Years of Experience",
                            kind: "number",
                            description: "How many years of relevant experience do you have?",
                            variant: "vue-shadcn-number-slider",
                            validation: { min: 0, max: 20 },
                        }
                    ],
                    [
                        {
                            id: "start-date-field",
                            key: "availableStartDate",
                            label: "Available Start Date",
                            kind: "date",
                            description: "When can you start working?",
                            variant: "vue-shadcn-date-date",
                            required: true,
                        }
                    ],
                    [
                        {
                            id: "remote-work-field",
                            key: "remoteWork",
                            label: "Available for Remote Work",
                            kind: "boolean",
                            description: "Are you willing to work remotely?",
                            variant: "vue-shadcn-boolean-switch",
                        },
                        {
                            id: "relocation-field",
                            key: "relocation",
                            label: "Willing to Relocate",
                            kind: "boolean",
                            description: "Are you willing to relocate if necessary?",
                            variant: "vue-shadcn-boolean-checkbox",
                        }
                    ],
                    [
                        {
                            id: "cover-letter-field",
                            key: "coverLetter",
                            label: "Cover Letter",
                            kind: "text",
                            description: "Tell us why you're the perfect fit for this position",
                            placeholder: "I am writing to express my interest in...",
                            variant: "vue-shadcn-text-textarea",
                            required: true,
                            validation: { min: 100 },
                        }
                    ]
                ],
                settings: {
                    importAliasComponents: "@/components",
                    importAliasUtils: "@/lib/utils",
                },
            },
            svelte: {
                id: "job-application",
                name: "Job Application Form",
                framework: "svelte",
                fields: [
                    [
                        {
                            id: "form-heading",
                            key: "formHeading",
                            label: "Job Application",
                            kind: "heading",
                            variant: "svelte-shadcn-heading-simple",
                        }
                    ],
                    [
                        {
                            id: "first-name-field",
                            key: "firstName",
                            label: "First Name",
                            kind: "text",
                            description: "Your first name",
                            placeholder: "Jane",
                            variant: "svelte-shadcn-text-input",
                            required: true,
                            validation: {},
                        },
                        {
                            id: "last-name-field",
                            key: "lastName",
                            label: "Last Name",
                            kind: "text",
                            description: "Your last name",
                            placeholder: "Doe",
                            variant: "svelte-shadcn-text-input",
                            required: true,
                            validation: {},
                        }
                    ],
                    [
                        {
                            id: "email-field",
                            key: "email",
                            label: "Email Address",
                            kind: "text",
                            description: "Your contact email",
                            placeholder: "jane.doe@example.com",
                            variant: "svelte-shadcn-text-input",
                            required: true,
                            validation: { isEmail: true },
                        },
                        {
                            id: "phone-field",
                            key: "phone",
                            label: "Phone Number",
                            kind: "text",
                            description: "Your contact phone number",
                            placeholder: "+1 (555) 123-4567",
                            variant: "svelte-shadcn-text-inputotp",
                            required: true,
                            validation: {},
                        }
                    ],
                    [
                        {
                            id: "position-field",
                            key: "position",
                            label: "Position Applied For",
                            kind: "enum",
                            description: "Select the position you're applying for",
                            variant: "svelte-shadcn-enum-select",
                            required: true,
                            enumValues: [
                                { id: "developer", label: "Software Developer", value: "developer" },
                                { id: "designer", label: "UX/UI Designer", value: "designer" },
                                { id: "manager", label: "Product Manager", value: "manager" },
                                { id: "marketing", label: "Marketing Specialist", value: "marketing" }
                            ],
                        }
                    ],
                    [
                        {
                            id: "experience-field",
                            key: "experience",
                            label: "Years of Experience",
                            kind: "number",
                            description: "How many years of relevant experience do you have?",
                            variant: "svelte-shadcn-number-slider",
                            validation: { min: 0, max: 20 },
                        }
                    ],
                    [
                        {
                            id: "start-date-field",
                            key: "availableStartDate",
                            label: "Available Start Date",
                            kind: "date",
                            description: "When can you start working?",
                            variant: "svelte-shadcn-date-date",
                            required: true,
                        }
                    ],
                    [
                        {
                            id: "remote-work-field",
                            key: "remoteWork",
                            label: "Available for Remote Work",
                            kind: "boolean",
                            description: "Are you willing to work remotely?",
                            variant: "svelte-shadcn-boolean-switch",
                        },
                        {
                            id: "relocation-field",
                            key: "relocation",
                            label: "Willing to Relocate",
                            kind: "boolean",
                            description: "Are you willing to relocate if necessary?",
                            variant: "svelte-shadcn-boolean-checkbox",
                        }
                    ],
                    [
                        {
                            id: "cover-letter-field",
                            key: "coverLetter",
                            label: "Cover Letter",
                            kind: "text",
                            description: "Tell us why you're the perfect fit for this position",
                            placeholder: "I am writing to express my interest in...",
                            variant: "svelte-shadcn-text-textarea",
                            required: true,
                            validation: { min: 100 },
                        }
                    ]
                ],
                settings: {
                    importAliasComponents: "@/components",
                    importAliasUtils: "@/lib/utils",
                },
            }
        },
    },
    // ... other templates
];
