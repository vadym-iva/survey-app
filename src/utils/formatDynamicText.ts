import { DYNAMIC_TEXT_REGEX } from './constants';
import { IFormatDinamicTextArguments } from './types';

export function formatDynamicText({
  template,
  dynamicValues,
  capitalizeFirstLetter = false,
}: IFormatDinamicTextArguments): string {
  if (!template) {
    return '';
  }

  let formattedTemplate = template.replace(DYNAMIC_TEXT_REGEX, (_, placeholder) => {
    const [variable, fallbackText] = placeholder.split('|').map((s: string) => s.trim());

    if (variable in dynamicValues) {
      const value = dynamicValues[variable];

      if (fallbackText && value) {
        return fallbackText;
      } else if (typeof value !== 'boolean') {
        return value.toLocaleLowerCase();
      }
    }

    return '';
  });

  if (capitalizeFirstLetter && formattedTemplate.length > 0) {
    formattedTemplate = formattedTemplate.charAt(0).toUpperCase() + formattedTemplate.slice(1);
  }

  return formattedTemplate;
}
