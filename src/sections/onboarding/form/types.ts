export enum TSeccionForm {
  PersonalInfo = 'Información Personal',
  Educacion = 'Nivel de Educación',
  subscriptionReasons = 'Motivos de suscripción',
}

export enum inputsOnboarding {
  textArea = 'textarea',
  buttons = 'buttons',
  select = 'select',
  multiButtons = 'multiButtons',
  textAndImage = 'textAndImage',
  multiChecbok = 'multiChecbok',
}

export type buttonOnboarding = {
  name: string;
  icon: string;
  options: any[];
};

export type FieldOnboarding = {
  id: string;
  nameFORMIK: string;
  type: inputsOnboarding;
  placeholder?: string;
  options?: string[];
  text?: any[];
};

interface contentStepOnboarding {
  fields: FieldOnboarding[];
  texts: TextOnboarding[];
  nextCondition:
    | { condition: (values: any) => {}; true: string; false: string }
    | 'nextStep'
    | 'nextContent'
    | 'finish';
  name: string;
}

export interface IFormDataOnboarding {
  id: string;
  title: TSeccionForm;
  content: contentStepOnboarding[];
  multipleContenst?: boolean;
}

export enum textTypeOnboarding {
  title = 'title',
  subtitle = 'subtitle',
  text = 'text',
}

export type TextOnboarding = {
  id: string;
  type: textTypeOnboarding;
  value: string;
};
