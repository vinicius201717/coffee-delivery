import { Dispatch, SetStateAction, createContext } from 'react'

export interface InterfaceCoffee {
  title: string
  desc: string
  subDis: string[]
  price: number
  image: string
  quantity: number
}

export interface InterfaceState {
  car: InterfaceCoffee[]
  address: {
    cep?: string
    rua?: string
    numero?: string
    complemento?: string
    bairro?: string
    cidade?: string
    uf?: string
    pagamento?: string
  }
}

interface InterfaceDataContext {
  state: InterfaceState
  setState: Dispatch<SetStateAction<InterfaceState>>
}

const initialValues: InterfaceDataContext = {
  state: {
    car: [],
    address: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
      pagamento: '',
    },
  },
  setState: () => {}, // Isso é apenas um valor padrão, você pode ajustá-lo
}

const AddressContext = createContext(initialValues)

export default AddressContext
