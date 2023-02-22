import React, { useRef, useState, useEffect } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { toast } from 'react-toastify'
import styled from "styled-components";
import { useLocationContext } from '../Context/LocatorContext';
import { useLanguageContext } from '../Context/languageContext';

const Search = () => {
  const inputFocus = useRef()
  const [data, setData] = useState('')
  const [shops, setShops] = useState(null)
  const { location } = useLocationContext()
  const { lang } = useLanguageContext()

  useEffect(() => {
    inputFocus.current.focus()
  }, [])

  useEffect(() => {
    if (data.length) {
      fetch(`${process.env.REACT_APP_URL}/search/${data}/${location.lat}/${location.lng}?lang=${lang}`)
        .then(async response => {
          if (response.ok) return response.json()
          else throw await response.json()
        })
        .then(result => {
          setShops(result.shop)
        })
        .catch(err => {
          toast.error(`An error occured - ${err.error || err}`, 2000)
        })
    } else {
      setShops(null)
    }
  }, [data])
  console.log(shops)
  return (
    <Wrapper>
      <div className="search_SearchBox">
        <AiOutlineSearch
          style={{
            color: '#8b7f7f4d',
            fontSize: '28px',
            fontWeight: '700'
          }}
          onClick={(e) => e.preventDefault()}
        />
        <input
          className="search_input"
          type="search"
          placeholder="Search Shop"
          ref={inputFocus}
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.search_SearchBox {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  padding: 1%;
  background: white;
  border: 2px solid #03C7C6;
  outline: none;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 0 2%;
  z-index: 500;
}
.search_input {
  width: 100%;
  height: 2rem;
  background: #efefef;
  border: none;
  outline: none;
  border-radius: 10px;
  margin: 1% 1%;
  padding: 0 1%;
}
`

export default Search
