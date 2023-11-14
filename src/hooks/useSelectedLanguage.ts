import React from 'react'

const useSelectedLanguage = () => {
    return localStorage.getItem("language")
}

export default useSelectedLanguage