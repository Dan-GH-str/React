import { createContext } from "react";

// С помощью контекста можно создать некоторое глобальное хранилище и обращаться к нему из любого компонента, что избавляет от 
// нужды перекидывать пропсы по компонентам на несколько уровней вниз

// Данные в это хранилище записываются через пропс value у провайдера контекста (в данном случае это AuthContext.Provider, используется в 
// корневом файле приложения App.js)
export const AuthContext = createContext(null)