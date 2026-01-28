export interface OnboardingStep {
  id: number;
  title?: string;
  category?: string;
  softwareName?: string;
  description: string;
  iconName: 'Box' | 'MessageSquare' | 'Rocket' | 'Download' | 'Camera' | 'BookOpen';
  details?: string[];
  isWarning?: boolean;
  modalButton?: {
    label: string;
    content: string;
  };
}