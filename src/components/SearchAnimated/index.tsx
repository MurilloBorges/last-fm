import React, { useCallback, useEffect, useState } from 'react';

import { FaTimesCircle } from 'react-icons/fa';

import debounce from 'lodash/debounce';

import colors from '../../styles/colors';
import { BtnGlobal } from '../../styles/general';
import { Input, InputContainer, SearchContainer } from './styles';

interface Props {
  onEmpty: () => void;
  onSearch: (text: string) => void;
  placeholder: string;
  inputRef: React.RefObject<HTMLInputElement>;
}

const SearchAnimated: React.FC<Props> = ({
  inputRef,
  onEmpty,
  onSearch,
  placeholder,
}) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const debounceOnChange = debounce(onSearch, 1000);

  const handleClear = useCallback(() => {
    // eslint-disable-next-line no-param-reassign
    if (inputRef.current) inputRef.current.value = '';
    onEmpty();
  }, [inputRef, onEmpty]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <SearchContainer>
      <InputContainer>
        <Input
          className="effect-8"
          color={colors.dark}
          fontSize="1.1rem"
          height="35px"
          onChange={e => debounceOnChange(e.target.value)}
          placeholder={placeholder}
          ref={inputRef}
        />
        <span className="focus-border">
          <i />
        </span>
      </InputContainer>
      <BtnGlobal
        className={`clean ${!!inputRef.current?.value && 'animatedBtn'}`}
        fontSize="0.9rem"
        fontSizeIpad="0.9rem"
        fontWeight="500"
        height="35px"
        heightIpad="35px"
        letterSpacing="0.5px"
        marginIpad="0"
        onClick={handleClear}
        width="auto"
        widthIpad="auto"
      >
        {windowWidth >= 768 ? 'Limpar' : <FaTimesCircle size={18} />}
      </BtnGlobal>
    </SearchContainer>
  );
};

export default SearchAnimated;
