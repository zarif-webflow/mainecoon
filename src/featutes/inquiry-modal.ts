import { getAssertedHtmlElement } from '@/utils/util';

const initEnquiryModal = () => {
  const galleryListSelector = '[data-gallery-list=true]';
  const galleryItemSelector = '[data-gallery-item=true]';
  const animalNameSelector = '[fs-cmsfilter-field=name]';
  const animalColorSelector = '[fs-cmsfilter-field=colors]';
  const inquiryButtonSelector = '[data-inquiry=true]';
  const inputAnimalSelector = '[data-input-animal=true]';

  const galleryListElement = getAssertedHtmlElement<HTMLElement>(galleryListSelector);
  const inquiryFormParent = getAssertedHtmlElement<HTMLElement>('[data-inquiry-form=true]');

  galleryListElement.addEventListener('click', (e) => {
    if (!e.target) return;

    const inquiryBtn = (e.target as HTMLElement).closest<HTMLElement>(inquiryButtonSelector);

    if (inquiryBtn == null) return;

    const targetGalleryItem = inquiryBtn.closest<HTMLElement>(galleryItemSelector);

    if (!targetGalleryItem) {
      console.error(`${galleryItemSelector} wasn't found!`);
      return;
    }

    const targetNameEl = targetGalleryItem.querySelector<HTMLElement>(animalNameSelector);
    const targetColorEl = targetGalleryItem.querySelector<HTMLElement>(animalColorSelector);
    const targetInput = inquiryFormParent.querySelector<HTMLInputElement>(inputAnimalSelector);

    if (!targetNameEl) {
      console.error(`${animalNameSelector} wasn't found!`);
      return;
    }

    if (!targetColorEl) {
      console.error(`${animalColorSelector} wasn't found!`);
      return;
    }

    if (!targetInput) {
      console.error(`${inputAnimalSelector} wasn't found!`);
      return;
    }

    const targetName = targetNameEl.textContent;
    const targetColor = targetColorEl.textContent;

    const targetText = `${targetName} (Color: ${targetColor})`;

    targetInput.value = targetText;

    targetInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
};

initEnquiryModal();
