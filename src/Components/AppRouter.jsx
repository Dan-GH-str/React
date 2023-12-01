
import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/router";
import { useContext } from "react";
import { AuthContext } from "../context";
import Loader from "../UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    // Вставлять роуты будем строго после того, как закончится проверка пользователя на авторизацию в App.js, иначе даже в случае 
    // успешной проверки сначала будут вставляться публичные роуты и лишь потом приватные, из-за чего юзера при обновлении 
    // страницы будет редиректить на страницу с постами. Роутер сам по себе должен отрабатывать только после того, когда ТОЧНО будет 
    // известно, авторизован юзер или нет (ведь по умолчанию пользователь неавторизован и необходимо время, чтобы его проверить) 
    if (isLoading) {
        return <Loader/>
    }

    return (
        // Если пользователь авторизован - вставляем приватные маршруты, иначе - публичные
        isAuth
            ? 
            <Routes>
                {privateRoutes.map((route, i) => 
                    <Route
                        key={i}
                        path={route.path}
                        Component={route.component}
                    />
                )}
                <Route 
                    path="*"
                    element={<Navigate replace to="/posts"/>}
                />
            </Routes>
            : 
            <Routes>
                {publicRoutes.map((route, i) => 
                    <Route
                        key={i}
                        path={route.path}
                        Component={route.component}
                    />
                    
                )}
                <Route 
                    path="*"
                    element={<Navigate replace to="/login"/>}
                />
            </Routes>
            
            
            /* <Route 
                path="/about"
                Component={About}
            />
            <Route 
                path="/posts"
                element={(
                    <>
                    <Posts/>
                    </>
                )}
            />
            <Route 
                path="/posts/:id"       // Двоеточие позволяет сделать путь динамическим, с параметром после самого двоеточия
                element={(
                    <>
                    <PostIdPage/>
                    </>
                )}
            />
            <Route 
                path="/error"
                element={(
                    <>
                    <Error/>
                    </>
                )}
                /> */
            /* <Route 
                path="*"
                element={<Navigate replace to="/posts"/>}
            />  */
        
    )
}

export default AppRouter;