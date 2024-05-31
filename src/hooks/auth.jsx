import { createContext, useContext, useState, useEffect } from "react"

import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function singIn({ email, password }) {
    try {
      const response = await api.post("/sessions", {
        email,
        password,
      })
      const { user, token } = response.data

      localStorage.setItem("@food-explorer:user", JSON.stringify(user))
      localStorage.setItem("@food-explorer:token", token)

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setData({ user, token })

      console.log(user, token)
    } catch (e) {
      if (e.response) {
        alert(e.response.data.error)
      } else {
        alert("Unable to access")
      }
    }
  }

  function singOut() {
    localStorage.removeItem("@food-explorer:token")
    localStorage.removeItem("@food-explorer:user")

    setData({})
  }

  useEffect(() => {
    const token = localStorage.getItem("@food-explorer:token")
    const user = localStorage.getItem("@food-explorer:user")

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user),
      })
    }
  }, [])
  return (
    <AuthContext.Provider
      value={{
        singIn,
        singOut,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }