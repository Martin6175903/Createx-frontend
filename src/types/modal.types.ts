import { Dispatch, SetStateAction } from 'react';

export interface IModal {
  isOpen: boolean
  whoOpenModal: string
}

export interface IModalProps {
  modalInfo: IModal
  setModalInfo: Dispatch<SetStateAction<IModal>>
}