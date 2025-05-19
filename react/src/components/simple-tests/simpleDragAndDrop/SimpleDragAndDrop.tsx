import { type DragEvent, FC, useRef, useState } from 'react';
import 'swiper/css';
import styles from './SimpleDragAndDrop.module.scss';

type SimpleExample = {
  id: number;
  order: number;
};
/**
 * @description Drag and Drop event lifecycle:
 *
 * @event onDragStart - Fired when dragging starts; the user grabs the element.
 * @event onDrag - Fired repeatedly while dragging the element.
 * @event onDragEnter - Fired when the dragged element enters another element's boundary.
 * @event onDragOver - Fired when the dragged element is over another element.
 * @event onDragLeave - Fired when the dragged element leaves another element's boundary.
 * @event onDrop - Fired when the dragged element is released over a drop target.
 * @event onDragEnd - Fired when the drag operation ends, regardless of drop success.
 */
export const SimpleDragAndDrop: FC = () => {
  const draggingId = useRef<number | null>(null);

  const [slides, setSlides] = useState<SimpleExample[]>([
    { id: 1, order: 1 },
    { id: 2, order: 2 },
    { id: 3, order: 3 },
    { id: 4, order: 4 },
    { id: 5, order: 5 },
    { id: 6, order: 6 },
    { id: 7, order: 7 },
    { id: 8, order: 8 },
  ]);

  /**
   * Handler for the start of dragging an element.
   * @param {DragEvent<HTMLDivElement>} e - The dragstart event.
   * @param {number} id - The ID of the dragged element.
   */
  const handleDragStart = (e: DragEvent<HTMLDivElement>, id: number): void => {
    draggingId.current = id;
    e.dataTransfer.setData('text/plain', '');
    e.currentTarget.classList.add(styles.dragging);
  };

  /**
   * Handler for the end of dragging.
   * Called when the element is released or dragging is cancelled.
   * @param {DragEvent<HTMLDivElement>} e - The dragend event.
   */
  const handleDragEnd = (e: DragEvent<HTMLDivElement>): void => {
    draggingId.current = null;
    e.currentTarget.classList.remove(styles.dragging);
  };

  /**
   * Handler for dragging over an element.
   * Must call preventDefault to allow dropping.
   * @param {DragEvent<HTMLDivElement>} e - The dragover event.
   */
  const handleDragOver = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  /**
   * Handler for the drop event.
   * Prevents the default behavior, removes drag styling,
   * and updates the order of items by moving the dragged element
   * to the drop target position.
   * @param {DragEvent<HTMLDivElement>} e - The drop event.
   * @param {number} targetId - The ID of the element where the item is dropped.
   */
  const handleDrop = (e: DragEvent<HTMLDivElement>, targetId: number): void => {
    e.preventDefault();
    //remove drag element styles after finish
    e.currentTarget.classList.remove(styles.dragOver);

    const fromId = draggingId.current;
    const toId = targetId;

    if (fromId === null || fromId === toId) return;

    setSlides((prev) => {
      const fromIndex = prev.findIndex((item) => item.id === fromId);
      const toIndex = prev.findIndex((item) => item.id === toId);

      if (fromIndex === -1 || toIndex === -1) return prev;

      const updated = [...prev];
      const [movedItem] = updated.splice(fromIndex, 1);
      updated.splice(toIndex, 0, movedItem);

      return updated.map((item, index) => ({ ...item, order: index + 1 }));
    });

    draggingId.current = null;
  };

  /**
   * Handler for both dragenter and dragleave events.
   * Toggles the dragOver CSS class to add or remove visual highlighting.
   * @param {DragEvent<HTMLDivElement>} e - The dragenter or dragleave event.
   */
  const onDragEnterOrLeave = (e: DragEvent<HTMLDivElement>): void => {
    e.currentTarget.classList.toggle(styles.dragOver);
  };

  return (
    <div className={styles.container}>
      {slides.map(({ id }: SimpleExample) => (
        <div
          key={id}
          draggable
          className={styles.card}
          onDragStart={(e) => handleDragStart(e, id)}
          onDragOver={handleDragOver}
          onDragEnter={onDragEnterOrLeave}
          onDragLeave={onDragEnterOrLeave}
          onDrop={(e) => handleDrop(e, id)}
          onDragEnd={handleDragEnd}
        >
          {id}
        </div>
      ))}
    </div>
  );
};

export default SimpleDragAndDrop;
