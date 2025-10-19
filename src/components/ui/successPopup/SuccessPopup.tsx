import { CheckCircle, X } from "lucide-react";

// successPopupStyles.ts
export const successPopupStyles = {
  overlay: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",
  container:
    "bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-[scaleIn_0.3s_ease-out]",
  closeButton: "absolute top-4 right-4 text-gray-400 hover:text-gray-600",
  content: "text-center",
  iconWrapper:
    "mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4",
  icon: "text-green-600",
  heading: "text-2xl font-bold text-gray-900 mb-2",
  description: "text-gray-600 mb-6",
  actionButton: "w-full py-3 px-6 bg-primary text-background rounded-lg",
};


const SuccessPopup: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={successPopupStyles.overlay}>
      <div className={successPopupStyles.container}>
        <button onClick={onClose} className={successPopupStyles.closeButton}>
          <X size={24} />
        </button>
        <div className={successPopupStyles.content}>
          <div className={successPopupStyles.iconWrapper}>
            <CheckCircle size={32} className={successPopupStyles.icon} />
          </div>
          <h3 className={successPopupStyles.heading}>Message Sent Successfully!</h3>
          <p className={successPopupStyles.description}>Thank you for reaching out...</p>
          <button onClick={onClose} className={successPopupStyles.actionButton}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;
