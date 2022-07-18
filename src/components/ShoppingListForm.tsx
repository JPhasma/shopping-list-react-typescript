import React, { useRef } from 'react';

interface ShoppingListFormProps {
  onAddItem: (item: string) => void;
}

function ShoppingListForm({ onAddItem }: ShoppingListFormProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted');
    const newProduct = inputRef.current!.value;
    onAddItem(newProduct);
    inputRef.current!.value = '';
  };

  return (
    <div>
      <h3>Add to List</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Product Name' ref={inputRef} />
        <button type='submit'>Add item</button>
      </form>
    </div>
  );
}

export default ShoppingListForm;
