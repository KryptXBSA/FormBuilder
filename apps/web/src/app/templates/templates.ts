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
                    ],
                ],
                settings: {
                    importAliasComponents: "@/components",
                    importAliasUtils: "@/lib/utils",
                },
            }
        },
    },
    {
        id: "product-registration",
        title: "Product Registration",
        description: "A form for registering products with customer information and product details laid out horizontally.",
        image: "/templates/prev1.png", // Update with appropriate image
        category: "Business",
        frameworks: ["next", "vue", "svelte"],
        fieldCount: 8,
        formSchema: {
            next: {
                id: "product-registration",
                name: "Product Registration",
                framework: "next",
                fields: [
                    [
                        {
                            id: "personal-info-heading",
                            key: "personalInfoHeading",
                            label: "Personal Information",
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
                            placeholder: "John",
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
                            placeholder: "Smith",
                            variant: "next-shadcn-text-input",
                            required: true,
                            validation: {},
                        },
                        {
                            id: "email-field",
                            key: "email",
                            label: "Email Address",
                            kind: "text",
                            description: "Your contact email",
                            placeholder: "john.smith@example.com",
                            variant: "next-shadcn-text-input",
                            required: true,
                            validation: { isEmail: true },
                        }
                    ],
                    [
                        {
                            id: "product-info-heading",
                            key: "productInfoHeading",
                            label: "Product Information",
                            kind: "heading",
                            variant: "next-shadcn-heading-simple",
                        }
                    ],
                    [
                        {
                            id: "product-type-field",
                            key: "productType",
                            label: "Product Type",
                            kind: "enum",
                            description: "Select the type of product",
                            variant: "next-shadcn-enum-combobox",
                            required: true,
                            enumValues: [
                                { id: "electronics", label: "Electronics", value: "electronics" },
                                { id: "furniture", label: "Furniture", value: "furniture" },
                                { id: "clothing", label: "Clothing", value: "clothing" },
                                { id: "appliances", label: "Appliances", value: "appliances" }
                            ],
                        },
                        {
                            id: "serial-number-field",
                            key: "serialNumber",
                            label: "Serial Number",
                            kind: "text",
                            description: "Product serial number",
                            placeholder: "SN-12345-ABC",
                            variant: "next-shadcn-text-inputotp",
                            required: true,
                            validation: {},
                        },
                        {
                            id: "purchase-date-field",
                            key: "purchaseDate",
                            label: "Purchase Date",
                            kind: "date",
                            description: "When was the product purchased?",
                            variant: "next-shadcn-date-date",
                            required: true,
                        }
                    ],
                    [
                        {
                            id: "warranty-field",
                            key: "warranty",
                            label: "Warranty Registration",
                            kind: "boolean",
                            description: "Register for extended warranty?",
                            variant: "next-shadcn-boolean-switch",
                        },
                        {
                            id: "price-range-field",
                            key: "priceRange",
                            label: "Price Range",
                            kind: "number",
                            description: "Approximate price range of your product",
                            variant: "next-shadcnexpansion-number-dualslider",
                            validation: { min: 0, max: 2000 },
                        }
                    ],
                    [
                        {
                            id: "comments-field",
                            key: "comments",
                            label: "Additional Comments",
                            kind: "text",
                            description: "Any additional information about your product",
                            placeholder: "Enter any comments or notes here...",
                            variant: "next-shadcnexpansion-text-autoresizetextarea",
                            validation: {},
                        }
                    ]
                ],
                settings: {
                    importAliasComponents: "@/components",
                    importAliasUtils: "@/lib/utils",
                },
            },
            vue: {
                id: "product-registration",
                name: "Product Registration",
                framework: "vue",
                fields: [
                    [
                        {
                            id: "personal-info-heading",
                            key: "personalInfoHeading",
                            label: "Personal Information",
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
                            placeholder: "John",
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
                            placeholder: "Smith",
                            variant: "vue-shadcn-text-input",
                            required: true,
                            validation: {},
                        },
                        {
                            id: "email-field",
                            key: "email",
                            label: "Email Address",
                            kind: "text",
                            description: "Your contact email",
                            placeholder: "john.smith@example.com",
                            variant: "vue-shadcn-text-input",
                            required: true,
                            validation: { isEmail: true },
                        }
                    ],
                    [
                        {
                            id: "product-info-heading",
                            key: "productInfoHeading",
                            label: "Product Information",
                            kind: "heading",
                            headingLevel: "H3",
                            variant: "vue-shadcn-heading-simple",
                        }
                    ],
                    [
                        {
                            id: "product-type-field",
                            key: "productType",
                            label: "Product Type",
                            kind: "enum",
                            description: "Select the type of product",
                            variant: "vue-shadcn-enum-combobox",
                            required: true,
                            enumValues: [
                                { id: "electronics", label: "Electronics", value: "electronics" },
                                { id: "furniture", label: "Furniture", value: "furniture" },
                                { id: "clothing", label: "Clothing", value: "clothing" },
                                { id: "appliances", label: "Appliances", value: "appliances" }
                            ],
                        },
                        {
                            id: "serial-number-field",
                            key: "serialNumber",
                            label: "Serial Number",
                            kind: "text",
                            description: "Product serial number",
                            placeholder: "SN-12345-ABC",
                            variant: "vue-shadcn-text-password",
                            required: true,
                            validation: {},
                        },
                        {
                            id: "purchase-date-field",
                            key: "purchaseDate",
                            label: "Purchase Date",
                            kind: "date",
                            description: "When was the product purchased?",
                            variant: "vue-shadcn-date-date",
                            required: true,
                        }
                    ],
                    [
                        {
                            id: "warranty-field",
                            key: "warranty",
                            label: "Warranty Registration",
                            kind: "boolean",
                            description: "Register for extended warranty?",
                            variant: "vue-shadcn-boolean-switch",
                        },
                        {
                            id: "price-range-field",
                            key: "priceRange",
                            label: "Price Range",
                            kind: "number",
                            description: "Approximate price of your product",
                            variant: "vue-shadcn-number-slider",
                            validation: { min: 0, max: 2000 },
                        }
                    ],
                    [
                        {
                            id: "comments-field",
                            key: "comments",
                            label: "Additional Comments",
                            kind: "text",
                            description: "Any additional information about your product",
                            placeholder: "Enter any comments or notes here...",
                            variant: "vue-shadcn-text-textarea",
                            validation: {},
                        }
                    ]
                ],
                settings: {
                    importAliasComponents: "@/components",
                    importAliasUtils: "@/lib/utils",
                },
            },
            svelte: {
                id: "product-registration",
                name: "Product Registration",
                framework: "svelte",
                fields: [
                    [
                        {
                            id: "personal-info-heading",
                            key: "personalInfoHeading",
                            label: "Personal Information",
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
                            placeholder: "John",
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
                            placeholder: "Smith",
                            variant: "svelte-shadcn-text-input",
                            required: true,
                            validation: {},
                        },
                        {
                            id: "email-field",
                            key: "email",
                            label: "Email Address",
                            kind: "text",
                            description: "Your contact email",
                            placeholder: "john.smith@example.com",
                            variant: "svelte-shadcn-text-input",
                            required: true,
                            validation: { isEmail: true },
                        }
                    ],
                    [
                        {
                            id: "product-info-heading",
                            key: "productInfoHeading",
                            label: "Product Information",
                            kind: "heading",
                            variant: "svelte-shadcn-heading-simple",
                        }
                    ],
                    [
                        {
                            id: "product-type-field",
                            key: "productType",
                            label: "Product Type",
                            kind: "enum",
                            description: "Select the type of product",
                            variant: "svelte-shadcn-enum-combobox",
                            required: true,
                            enumValues: [
                                { id: "electronics", label: "Electronics", value: "electronics" },
                                { id: "furniture", label: "Furniture", value: "furniture" },
                                { id: "clothing", label: "Clothing", value: "clothing" },
                                { id: "appliances", label: "Appliances", value: "appliances" }
                            ],
                        },
                        {
                            id: "serial-number-field",
                            key: "serialNumber",
                            label: "Serial Number",
                            kind: "text",
                            description: "Product serial number",
                            placeholder: "SN-12345-ABC",
                            variant: "svelte-shadcn-text-inputotp",
                            required: true,
                            validation: {},
                        },
                        {
                            id: "purchase-date-field",
                            key: "purchaseDate",
                            label: "Purchase Date",
                            kind: "date",
                            description: "When was the product purchased?",
                            variant: "svelte-shadcn-date-date",
                            required: true,
                        }
                    ],
                    [
                        {
                            id: "warranty-field",
                            key: "warranty",
                            label: "Warranty Registration",
                            kind: "boolean",
                            description: "Register for extended warranty?",
                            variant: "svelte-shadcn-boolean-switch",
                        },
                        {
                            id: "price-range-field",
                            key: "priceRange",
                            label: "Price Range",
                            kind: "number",
                            description: "Approximate price of your product",
                            variant: "svelte-shadcn-number-slider",
                            validation: { min: 0, max: 2000 },
                        }
                    ],
                    [
                        {
                            id: "comments-field",
                            key: "comments",
                            label: "Additional Comments",
                            kind: "text",
                            description: "Any additional information about your product",
                            placeholder: "Enter any comments or notes here...",
                            variant: "svelte-shadcn-text-textarea",
                            validation: {},
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
    {
        id: "customer-feedback",
        title: "Customer Feedback Survey",
        description: "A comprehensive survey form to collect customer feedback about products and services with multiple horizontal field layouts.",
        image: "/templates/prev1.png", // Update with appropriate image
        category: "Feedback",
        frameworks: ["next", "vue", "svelte"],
        fieldCount: 9,
        formSchema: {
            next: {
                id: "customer-feedback",
                name: "Customer Feedback Survey",
                framework: "next",
                fields: [
                    [
                        {
                            id: "survey-heading",
                            key: "surveyHeading",
                            label: "Customer Feedback Survey",
                            kind: "heading",
                            variant: "next-shadcn-heading-simple",
                        }
                    ],
                    [
                        {
                            id: "customer-info-heading",
                            key: "customerInfoHeading",
                            label: "Customer Information",
                            kind: "heading",
                            variant: "next-shadcn-heading-simple",
                        }
                    ],
                    [
                        {
                            id: "full-name-field",
                            key: "fullName",
                            label: "Full Name",
                            kind: "text",
                            description: "Your full name",
                            placeholder: "John Smith",
                            variant: "next-shadcn-text-input",
                            required: true,
                            validation: {},
                        },
                        {
                            id: "email-field",
                            key: "email",
                            label: "Email Address",
                            kind: "text",
                            description: "Your email address",
                            placeholder: "john.smith@example.com",
                            variant: "next-shadcn-text-input",
                            required: true,
                            validation: { isEmail: true },
                        },
                        {
                            id: "age-field",
                            key: "age",
                            label: "Age",
                            kind: "number",
                            description: "Your age",
                            variant: "next-shadcn-number-input",
                            validation: { min: 18, max: 100 },
                        }
                    ],
                    [
                        {
                            id: "product-experience-heading",
                            key: "productExperienceHeading",
                            label: "Product Experience",
                            kind: "heading",
                            variant: "next-shadcn-heading-simple",
                        }
                    ],
                    [
                        {
                            id: "product-purchased-field",
                            key: "productPurchased",
                            label: "Product Purchased",
                            kind: "enum",
                            description: "Select the product you purchased",
                            variant: "next-shadcn-enum-combobox",
                            required: true,
                            enumValues: [
                                { id: "product1", label: "Smart Phone", value: "smartphone" },
                                { id: "product2", label: "Laptop", value: "laptop" },
                                { id: "product3", label: "Tablet", value: "tablet" },
                                { id: "product4", label: "Accessories", value: "accessories" }
                            ],
                        },
                        {
                            id: "purchase-date-field",
                            key: "purchaseDate",
                            label: "Purchase Date",
                            kind: "date",
                            description: "When did you purchase the product?",
                            variant: "next-shadcn-date-date",
                            required: true,
                        }
                    ],
                    [
                        {
                            id: "satisfaction-field",
                            key: "satisfaction",
                            label: "Overall Satisfaction",
                            kind: "number",
                            description: "Rate your overall satisfaction with the product",
                            variant: "next-shadcn-number-slider",
                            validation: { min: 1, max: 10 },
                            required: true,
                        }
                    ],
                    [
                        {
                            id: "recommend-field",
                            key: "recommend",
                            label: "Would Recommend",
                            kind: "boolean",
                            description: "Would you recommend this product to others?",
                            variant: "next-shadcn-boolean-switch",
                            required: true,
                        },
                        {
                            id: "purchase-again-field",
                            key: "purchaseAgain",
                            label: "Would Purchase Again",
                            kind: "boolean",
                            description: "Would you purchase this product again?",
                            variant: "next-shadcn-boolean-checkbox",
                            required: true,
                        }
                    ],
                    [
                        {
                            id: "price-value-field",
                            key: "priceValue",
                            label: "Price-Value Ratio",
                            kind: "enum",
                            description: "How would you rate the price-value ratio?",
                            variant: "next-shadcn-enum-radio",
                            required: true,
                            enumValues: [
                                { id: "excellent", label: "Excellent", value: "excellent" },
                                { id: "good", label: "Good", value: "good" },
                                { id: "average", label: "Average", value: "average" },
                                { id: "poor", label: "Poor", value: "poor" }
                            ],
                        }
                    ],
                    [
                        {
                            id: "feedback-field",
                            key: "feedback",
                            label: "Additional Feedback",
                            kind: "text",
                            description: "Please provide any additional feedback or suggestions",
                            placeholder: "Share your thoughts here...",
                            variant: "next-shadcnexpansion-text-autoresizetextarea",
                            validation: {},
                        }
                    ]
                ],
                settings: {
                    importAliasComponents: "@/components",
                    importAliasUtils: "@/lib/utils",
                },
            },
            vue: {
                id: "customer-feedback",
                name: "Customer Feedback Survey",
                framework: "vue",
                fields: [
                    [
                        {
                            id: "survey-heading",
                            key: "surveyHeading",
                            label: "Customer Feedback Survey",
                            kind: "heading",
                            variant: "vue-shadcn-heading-simple",
                        }
                    ],
                    [
                        {
                            id: "customer-info-heading",
                            key: "customerInfoHeading",
                            label: "Customer Information",
                            kind: "heading",
                            variant: "vue-shadcn-heading-simple",
                        }
                    ],
                    [
                        {
                            id: "full-name-field",
                            key: "fullName",
                            label: "Full Name",
                            kind: "text",
                            description: "Your full name",
                            placeholder: "John Smith",
                            variant: "vue-shadcn-text-input",
                            required: true,
                            validation: {},
                        },
                        {
                            id: "email-field",
                            key: "email",
                            label: "Email Address",
                            kind: "text",
                            description: "Your email address",
                            placeholder: "john.smith@example.com",
                            variant: "vue-shadcn-text-input",
                            required: true,
                            validation: { isEmail: true },
                        },
                        {
                            id: "age-field",
                            key: "age",
                            label: "Age",
                            kind: "number",
                            description: "Your age",
                            variant: "vue-shadcn-number-input",
                            validation: { min: 18, max: 100 },
                        }
                    ],
                    [
                        {
                            id: "product-experience-heading",
                            key: "productExperienceHeading",
                            label: "Product Experience",
                            kind: "heading",
                            variant: "vue-shadcn-heading-simple",
                        }
                    ],
                    [
                        {
                            id: "product-purchased-field",
                            key: "productPurchased",
                            label: "Product Purchased",
                            kind: "enum",
                            description: "Select the product you purchased",
                            variant: "vue-shadcn-enum-combobox",
                            required: true,
                            enumValues: [
                                { id: "product1", label: "Smart Phone", value: "smartphone" },
                                { id: "product2", label: "Laptop", value: "laptop" },
                                { id: "product3", label: "Tablet", value: "tablet" },
                                { id: "product4", label: "Accessories", value: "accessories" }
                            ],
                        },
                        {
                            id: "purchase-date-field",
                            key: "purchaseDate",
                            label: "Purchase Date",
                            kind: "date",
                            description: "When did you purchase the product?",
                            variant: "vue-shadcn-date-date",
                            required: true,
                        }
                    ],
                    [
                        {
                            id: "satisfaction-field",
                            key: "satisfaction",
                            label: "Overall Satisfaction",
                            kind: "number",
                            description: "Rate your overall satisfaction with the product",
                            variant: "vue-shadcn-number-slider",
                            validation: { min: 1, max: 10 },
                            required: true,
                        }
                    ],
                    [
                        {
                            id: "recommend-field",
                            key: "recommend",
                            label: "Would Recommend",
                            kind: "boolean",
                            description: "Would you recommend this product to others?",
                            variant: "vue-shadcn-boolean-switch",
                            required: true,
                        },
                        {
                            id: "purchase-again-field",
                            key: "purchaseAgain",
                            label: "Would Purchase Again",
                            kind: "boolean",
                            description: "Would you purchase this product again?",
                            variant: "vue-shadcn-boolean-checkbox",
                            required: true,
                        }
                    ],
                    [
                        {
                            id: "price-value-field",
                            key: "priceValue",
                            label: "Price-Value Ratio",
                            kind: "enum",
                            description: "How would you rate the price-value ratio?",
                            variant: "vue-shadcn-enum-radio",
                            required: true,
                            enumValues: [
                                { id: "excellent", label: "Excellent", value: "excellent" },
                                { id: "good", label: "Good", value: "good" },
                                { id: "average", label: "Average", value: "average" },
                                { id: "poor", label: "Poor", value: "poor" }
                            ],
                        }
                    ],
                    [
                        {
                            id: "feedback-field",
                            key: "feedback",
                            label: "Additional Feedback",
                            kind: "text",
                            description: "Please provide any additional feedback or suggestions",
                            placeholder: "Share your thoughts here...",
                            variant: "vue-shadcn-text-textarea",
                            validation: {},
                        }
                    ]
                ],
                settings: {
                    importAliasComponents: "@/components",
                    importAliasUtils: "@/lib/utils",
                },
            },
            svelte: {
                id: "customer-feedback",
                name: "Customer Feedback Survey",
                framework: "svelte",
                fields: [
                    [
                        {
                            id: "survey-heading",
                            key: "surveyHeading",
                            label: "Customer Feedback Survey",
                            kind: "heading",
                            variant: "svelte-shadcn-heading-simple",
                        }
                    ],
                    [
                        {
                            id: "customer-info-heading",
                            key: "customerInfoHeading",
                            label: "Customer Information",
                            kind: "heading",
                            variant: "svelte-shadcn-heading-simple",
                        }
                    ],
                    [
                        {
                            id: "full-name-field",
                            key: "fullName",
                            label: "Full Name",
                            kind: "text",
                            description: "Your full name",
                            placeholder: "John Smith",
                            variant: "svelte-shadcn-text-input",
                            required: true,
                            validation: {},
                        },
                        {
                            id: "email-field",
                            key: "email",
                            label: "Email Address",
                            kind: "text",
                            description: "Your email address",
                            placeholder: "john.smith@example.com",
                            variant: "svelte-shadcn-text-input",
                            required: true,
                            validation: { isEmail: true },
                        },
                        {
                            id: "age-field",
                            key: "age",
                            label: "Age",
                            kind: "number",
                            description: "Your age",
                            variant: "svelte-shadcn-number-input",
                            validation: { min: 18, max: 100 },
                        }
                    ],
                    [
                        {
                            id: "product-experience-heading",
                            key: "productExperienceHeading",
                            label: "Product Experience",
                            kind: "heading",
                            variant: "svelte-shadcn-heading-simple",
                        }
                    ],
                    [
                        {
                            id: "product-purchased-field",
                            key: "productPurchased",
                            label: "Product Purchased",
                            kind: "enum",
                            description: "Select the product you purchased",
                            variant: "svelte-shadcn-enum-combobox",
                            required: true,
                            enumValues: [
                                { id: "product1", label: "Smart Phone", value: "smartphone" },
                                { id: "product2", label: "Laptop", value: "laptop" },
                                { id: "product3", label: "Tablet", value: "tablet" },
                                { id: "product4", label: "Accessories", value: "accessories" }
                            ],
                        },
                        {
                            id: "purchase-date-field",
                            key: "purchaseDate",
                            label: "Purchase Date",
                            kind: "date",
                            description: "When did you purchase the product?",
                            variant: "svelte-shadcn-date-date",
                            required: true,
                        }
                    ],
                    [
                        {
                            id: "satisfaction-field",
                            key: "satisfaction",
                            label: "Overall Satisfaction",
                            kind: "number",
                            description: "Rate your overall satisfaction with the product",
                            variant: "svelte-shadcn-number-slider",
                            validation: { min: 1, max: 10 },
                            required: true,
                        }
                    ],
                    [
                        {
                            id: "recommend-field",
                            key: "recommend",
                            label: "Would Recommend",
                            kind: "boolean",
                            description: "Would you recommend this product to others?",
                            variant: "svelte-shadcn-boolean-switch",
                            required: true,
                        },
                        {
                            id: "purchase-again-field",
                            key: "purchaseAgain",
                            label: "Would Purchase Again",
                            kind: "boolean",
                            description: "Would you purchase this product again?",
                            variant: "svelte-shadcn-boolean-checkbox",
                            required: true,
                        }
                    ],
                    [
                        {
                            id: "price-value-field",
                            key: "priceValue",
                            label: "Price-Value Ratio",
                            kind: "enum",
                            description: "How would you rate the price-value ratio?",
                            variant: "svelte-shadcn-enum-radio",
                            required: true,
                            enumValues: [
                                { id: "excellent", label: "Excellent", value: "excellent" },
                                { id: "good", label: "Good", value: "good" },
                                { id: "average", label: "Average", value: "average" },
                                { id: "poor", label: "Poor", value: "poor" }
                            ],
                        }
                    ],
                    [
                        {
                            id: "feedback-field",
                            key: "feedback",
                            label: "Additional Feedback",
                            kind: "text",
                            description: "Please provide any additional feedback or suggestions",
                            placeholder: "Share your thoughts here...",
                            variant: "svelte-shadcn-text-textarea",
                            validation: {},
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
];
