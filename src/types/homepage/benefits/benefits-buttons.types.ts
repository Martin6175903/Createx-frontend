import { Dispatch, SetStateAction } from 'react';

export interface BenefitsButtonsTypes {
  title: string
  id: number
  activeButtonIndex: number
  setActiveButtonIndex: Dispatch<SetStateAction<number>>
}