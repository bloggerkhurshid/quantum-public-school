import { useEffect } from 'react';

const DocumentMeta = ({ title, description }) => {
  useEffect(() => {
    // Update title
    document.title = `${title} | Quantum Public School`;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    
    if (description) {
      metaDescription.content = description;
    }
  }, [title, description]);

  return null;
};

export default DocumentMeta;
