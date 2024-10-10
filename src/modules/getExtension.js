import path from 'path';

export default (file1, file2) => {
  const extension1 = path.extname(file1);
  const file1WithExtension = [file1, extension1];

  const extension2 = path.extname(file2);
  const file2WithExtension = [file2, extension2];

  return [file1WithExtension, file2WithExtension];
};
