import React, { createContext, useContext, useState } from 'react';
import { X } from 'lucide-react';

interface ModalContextType {
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);

  const openModal = (content: React.ReactNode) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#21252b] rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="flex justify-end p-2">
              <button
                onClick={closeModal}
                className="p-1 hover:bg-[#3e4451] rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-[#abb2bf]" />
              </button>
            </div>
            {modalContent}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within ModalProvider');
  return context;
};