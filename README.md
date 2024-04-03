# Typescript Programming Using Generics

The purpose of this project is to demonstrate how to use generics when programming in TypeScript.

The use case for this project is document processing class. The document being processed is an implementation
of either the `IWebDocument` or `IPrintDocument` interface. There are three example classes that use generic variables in 
various ways. The document processing classes are `DocumentProcessorV1`, `DocumentProcessorV2`, and `DocumentProcessorV3`

- [`DocumentProcessorV1`](./src/document/DocumentProcessorV1.ts) is an example of using a single generic variable `T` that represents the document to process.  The
generic variable `T` is constrained to accept only an implementation of an `IWebDocument` or an `IPrintDocument` interface.
- [`DocumentProcessorV2`](./src/document/DocumentProcessorV2.ts) is an example of using a generic variable at the class's method level only.
- [`DocumentProcessorV3`](./src/document/DocumentProcessorV2.ts) is an example of using two generic variables, `T` and `V`. Generic variable `T` represents the document
to be processes. The generic variable `V` represents a confirmation of type `IWebConfirmation` or `IPrintConfirmation`. The confirmation
is returned by the class's `process(document: T) : V` method. The generic variable `T` is constrained to accept only an implementation
of an `IWebDocument` or an `IPrintDocument` interface.

# System requirements

This project has the following requirements

- Node.js and npm need to be installed on the machine running the project.

# Getting the code up and running

Execute the following instruction to install the project's dependencies from NPM.

```javascript
npm install
```

# Exercising the code

## Exercising an example of a class that uses one generic variable

You can view the code that the following instruction exercises [here](./src/example-01.ts). The class being
exercised is [`DocumentProcessorV1`](./src/document/DocumentProcessorV1.ts).

```javascript
npx ts-node ./src/example-01.ts
```

You'll get output similar to the following:

```text
Processing as a web document: https://incompatible-nickname.org/
Processing as a print document with page count: 39
```


## Exercising a class that declares a generic variable at the method level

You can view the code that the following instruction exercises [here](./src/example-02.ts).
The class being exercised is [`DocumentProcessorV2`](./src/document/DocumentProcessorV2.ts).

```bash
npx ts-node ./src/example-02.ts
```

You'll output similar to the following:

```text
Processing as a web document: https://tender-sweatshop.name/
Processing as a print document with page count: 95
```

## Exercising a class that uses two generic variables

The following instruction that you can view [here](./src/example-03.ts) exercises a class that
takes two generic variables. One  variable represents the document that the [`DocumentProcessor`](./src/document/DocumentProcessorV3.ts)
class is to process. The other generic variable represents the confirmation that is returned by the
class method that processes the document.

The class being exercised is [`DocumentProcessorV3`](./src/document/DocumentProcessorV3.ts).

```bash
npx ts-node ./src/example-03.ts
```

You'll get output similar to the following:


```text
Processing as a web document: https://eager-loop.name/
{
  webResult: {
    timeStamp: 2024-03-31T12:56:21.520Z,
    documentId: '6e0a6c5c-3821-4eb3-88d7-60019e639883',
    title: 'causa amitto arceo tenetur',
    url: 'https://eager-loop.name/'
  }
}
Processing as a print document with page count: 28
{
  printResult: {
    timeStamp: 2024-03-31T12:56:21.525Z,
    documentId: '64d0d367-c289-485f-bc46-b05b9810e460',
    title: 'caterva absum adnuo quos',
    pageCount: 28
  }
}

```






