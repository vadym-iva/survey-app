export interface IFormatDinamicTextArguments {
  template?: string;
  dynamicValues: Record<string, string | boolean>;
  capitalizeFirstLetter: boolean;
}
