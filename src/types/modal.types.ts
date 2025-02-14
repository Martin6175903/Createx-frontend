import { Dispatch, SetStateAction } from 'react';

export interface IModal {
  isOpen: boolean
  whoOpenModal: string
}

export interface IModalProps {
  isOpenModal: boolean
  setIsOpenModal: Dispatch<SetStateAction<boolean>>
}