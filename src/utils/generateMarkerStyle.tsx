import {renderToString} from 'react-dom/server';
import {InfoVariants} from '../_features/map';
import cn from './tailwind';
import {ExclamationTriangleIcon} from '@radix-ui/react-icons';

// Function to generate marker style based on variant, danger flag, and text
export default function generateMarkerStyle(
  variant: InfoVariants | '', // Variant of the marker
  isDanger: boolean, // Flag indicating if the marker is dangerous
  text: string, // Text content of the marker
) {
  // Base class for marker
  const baseClass =
    'rounded-full bg-blue-500 text-[#262D40] flex justify-center items-center flex-row whitespace-nowrap !w-fit px-4 py-2.5 !h-auto font-regular text-base';

  // Default marker style
  let marker = {
    className: baseClass,
    html: <div>{text}</div>,
  };

  // Applying specific styles based on variant
  if (variant === 'electricity') {
    marker.className = cn(baseClass, 'bg-[#00C7BE]');
    marker.html = (
      <div>
        <span>{text}</span>
        <span className="opacity-50">kWh</span>
      </div>
    );
  }
  if (variant === 'gas') {
    marker.className = cn(baseClass, 'bg-[#ECD717]');
    marker.html = (
      <div>
        <span>{text}</span>
        <span className="opacity-50">
          m<sup>3</sup>
        </span>
      </div>
    );
  }
  if (variant === 'trash') {
    marker.className = cn(baseClass, 'bg-[#25B12B]');
    marker.html = (
      <div>
        <span>{text}</span>
        <span className="opacity-50">%</span>
      </div>
    );
  }
  if (variant === 'water') {
    marker.className = cn(baseClass, 'bg-[#007AFF]');
    marker.html = (
      <div className="text-white">
        <span>{text}</span>
        <span className="opacity-50">l/min</span>
      </div>
    );
  }
  if (variant === 'alert') {
    marker.className = cn(baseClass, 'bg-[#FF883F]');
    marker.html = (
      <div className="flex gap-1.5 items-center justify-center">
        <ExclamationTriangleIcon /> <span> {text}</span>
      </div>
    );
  }

  // Applying danger style if the marker is dangerous
  if (isDanger) {
    marker.className = cn(marker.className, 'bg-[#FF883F]');
  }

  // Returning marker style with HTML converted to string
  return {
    className: marker.className,
    html: renderToString(marker.html),
  };
}
