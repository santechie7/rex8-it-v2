import { Loader2 } from "lucide-react";


// loadingPopupStyles.ts
export const loadingStyles = {
  overlay: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",
  container:
    "bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-[scaleIn_0.3s_ease-out]",
  content: "text-center",
  iconWrapper:
    "mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4",
  icon: "text-blue-600 animate-spin",
  heading: "text-2xl font-bold text-gray-900 mb-2",
  description: "text-gray-600",
};


const Loading: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className={loadingStyles.overlay}>
      <div className={loadingStyles.container}>
        <div className={loadingStyles.content}>
          <div className={loadingStyles.iconWrapper}>
            <Loader2 size={32} className={loadingStyles.icon} />
          </div>
          <h3 className={loadingStyles.heading}>Sending Message...</h3>
          <p className={loadingStyles.description}>
            Please wait while we process your request.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
