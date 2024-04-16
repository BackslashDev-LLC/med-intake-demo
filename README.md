# BackslashDev Med Intake Demo

This repository contains an example implementation of BackslashDev's free and open-source C# library for extracting structured data from images, [BackslashDev-LLC/img-to-json](https://github.com/BackslashDev-LLC/img-to-json).

The purpose of this demo is to show how easy it is to add image understanding capabilities to an existing application.

## Med Intake

The example here is a form used to input data around pre-existing prescriptions. This is a use-case we see time and again with our customers in healthcare. Put simply, this is a data-entry screne for a user to manually review an Rx Label and manually enter the information from the label.

The improvement in the user experience of this example comes from the ability for the user to take a simple picture of the label and have the data extracted quickly and automatically, pre-populating the data entry form.

### Important Note

At this point, it is not possible to obtain a BAA from OpenAI to use the GPT4 Vision Service due to data retention policies. If you are a HIPAA covered entity, carefully review the relevant HIPAA rules before implementing this service. OpenAI services provided by Microsoft Azure may be a better fit today. This is flexible, and it is likely that OpenAI will make this service available with a BAA soon.

## For Developers

The purpose of this demo is to show how easy it is to add image understanding in an existing application. Historically this would have required implementing a complex OCR tool, or training a custom AI model. Now, the changes can be made with just a few lines of C# with the results showing up in the classes you're already using quickly.

For full details on the integration of img-to-json with an existing project, please check out the [explainer video]().

## Runnng the Project

This repository contains an Angular application, and a C# .NET Web API. It is assumed that your development environment is already configured for these technologies.

### Angular

1. Open a terminal window, targeting the `Client` folder of the repository
1. Install dependencies using `npm install`
1. Start the application with `ng serve`
1. Open a Web Browser to `localhost:4200`

### .NET Web API

1. Open `Server/MedIntakeDmo/MedIntakeDemo.sln` in Visual Studio 2022
1. Create a new `appsettings.local.json` in the root of the solution with the following configuration:

```json
{
  "OpenAIImageConfig": {
    "ApiKey": "<your-secret-key>"
  }
}
```

3. Run the `MedIntakeDemo.Api` project

# Learn More

If you're interested in learning more, here are some resources you might find helpful:

- [OpenAI GPT4 Vision Documentation](https://platform.openai.com/docs/guides/vision)
- [Our Blog Post - Image Understanding with OpenAI and C#](https://www.backslashdev.com/blogs/image-understanding-with-openai-and-cs)
- [The img-to-json library](https://github.com/BackslashDev-LLC/img-to-json)
- [Watch John Ackerman Explain img-to-js]()
