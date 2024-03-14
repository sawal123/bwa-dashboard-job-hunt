"use client";

import { JOBTYPES } from "@/constants";
import { z } from "zod";

export const jobFormSchema = z.object({
    roles: z
        .string({ required_error: "Job Title is required" })
        .min(3, { message: "jobTitle must be at least 3 characters" }),
    JobType: z.enum(JOBTYPES, {
        required_error: "Your need to selected a job type",
    }),
    salaryFrom: z.string({ required_error: "Salary From is required" }),
    salaryTo: z.string({ required_error: "Salary To is required" }),
    categoryId: z.string({ required_error: " you need to select a category" }),
    requiredSkills: z
        .string()
        .array()
        .nonempty({ message: "Required Skill must be at least 1 Skill" }), 

    jobDescription: z
        .string({ required_error: "Job Description is required" })
        .min(10, {
            message: "Required description must be at least 10 characters",
        }),
    responsibility: z
        .string({ required_error: "Job Description is required" })
        .min(10, {
            message: "Required description must be at least 10 characters",
        }),
    whoYouAre: z
        .string({ required_error: "Job Description is required" })
        .min(10, {
            message: "Required description must be at least 10 characters",
        }),
    niceToHave: z
        .string({ required_error: "Job Description is required" })
        .min(10, {
            message: "Required description must be at least 10 characters",
        }),
    benefits: z.object({
        benefit: z.string(),
        description: z.string()
    }).array().nonempty({ message: 'Benefits must be at least 1 benefit' })

});
