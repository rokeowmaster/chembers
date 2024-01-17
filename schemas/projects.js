import { defineField } from "sanity";


const Project = {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
          defineField({
            name: "project_title",
            title: "Project_title",
            type: "string",
            validation: (rule) => rule.required(),
          }),
          {
            name: "project_thumb",
            title: "Project_thumb",
            type: "image",
            description: "Upload a project thumbnail",
            options: { hotspot: true },
            fields: [
              {
                name: "alt",
                title: "Alt",
                type: "string",
              },
            ],
          },
          defineField({
            name: "project_description",
            title: "Project_description",
            type: "string",
            validation: (rule) => rule.required(),
          }),
          defineField({
            name: "designer",
            title: "Designer",
            type: "string",
            validation: (rule) => rule.required(),
          }),
    ]
}

export default Project;