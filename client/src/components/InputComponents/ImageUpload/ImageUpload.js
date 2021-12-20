import React from 'react';
import classNames from 'classnames';
import { useField } from 'formik';

const ImageUpload = (props) => {
  const [field, meta, helpers] = useField(props.name);
  const { value, ...rest } = field;
  const { uploadContainer, inputContainer, imgStyle } = props.classes;
  const onChange = (e) => {
    const node = window.document.getElementById('imagePreview');
    const file = e.target.files[0];
    const imageType = /image.(jpeg|pjpeg|png|gif|webp)/;
    if (!imageType.test(file.type)) {
      e.target.value = '';
    } else {
      helpers.setValue(file);
      const reader = new FileReader();
      reader.onload = () => {
        node.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className={uploadContainer}>
      <div className={inputContainer}>
        <span>Support only images (*.png, *.gif, *.jpeg, *.webp)</span>
        <input
          {...rest}
          id="fileInput"
          type="file"
          onChange={onChange}
        />
        <label htmlFor="fileInput">Chose file</label>
      </div>
      <img
        id="imagePreview"
        className={classNames({ [imgStyle]: !!field.value })}
        alt="user"
      />
    </div>
  );
};

export default ImageUpload;
