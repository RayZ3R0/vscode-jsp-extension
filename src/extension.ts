import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log("JSP Language Support extension is now active");

  // Register an event listener for JSP files to provide enhanced indentation
  const disposable = vscode.languages.registerOnTypeFormattingEditProvider(
    { language: "jsp", scheme: "file" },
    {
      provideOnTypeFormattingEdits(
        document: vscode.TextDocument,
        position: vscode.Position,
        ch: string,
      ): vscode.TextEdit[] {
        // Only trigger for specific characters
        if (ch !== "\n" && ch !== "}" && ch !== ">") {
          return [];
        }

        // Get the current line text
        const currentLine = document.lineAt(position.line);
        const lineText = currentLine.text;

        // Implement intelligent JSP-specific indentation logic
        // For now, we're relying on VSCode's built-in indentation rules defined in language-configuration.json
        // This can be expanded for more specific JSP indentation cases

        return [];
      },
    },
    "\n",
    "}",
    ">",
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {
  // Clean up resources when extension is deactivated
}
