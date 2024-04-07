# FE_CODING_CONVENTION.md
> IMPORTANT: Làm sao dễ Maintain nhất

> IMPORTANT: KHÔNG VIẾT BIẾN, FILE & FOLDER CÓ 's' ở bất cứ đâu
```
bads: users, products, ...
good: user, product, ...
or : userArray, userList, userCollection, ... (kiểu dữ liệu trả ra)
```

- NOTE: trong toàn bộ src không tồn tại tên biến gạch ngang exp: customer-report

- Dùng [Eslint Typescript](https://typescript-eslint.io/getting-started/) format suggestion
    

- Dùng [Prettier](https://prettier.io/docs/en/#docsNav)

- Dùng [Husky](https://typicode.github.io/husky/how-to.html)

- Thư mục chứa Component phải có tên giống với tên Component và phải PascalCase
```
bads: header, headerComponent, header-component
good: folder Header, file Header.tsx  
```

# Export Component 
- Export components ở cuối file

Bad
```ts
// Bad
// Filename: userlogin.ts
export const UserLoginNew = () => {}
```

Good
```ts
// Good
// Filename: UserLogin.tsx
const UserLogin = () => {}
export default UserLogin;
```

# Tên Prop Component
- phải là camelCase
```
bad: <UserLogin user_name="John Doe" />
good: <UserLogin userName="John Doe" />
``` 

# Type hoặc Interface 
- PascalCase

```ts
// demo Type
export type UserType = {
	userId: string
	userName: string
}
```

```ts
// demo Interface
export interface User {
	userId: string
	userName: string
}
```

```ts
// demo REACT
interface UseUserLoginProps {
	username: string
	password:string
}

interface UseUserLoginReturn {
  status: HTTP_STATUS
  data: gì đó
}

const useUserLogin = ({username, password}: UseUserLoginProps): UseUserLoginReturn => {
    return axios.post(xxx) // ví dụ
}
```

# Tags:
- Luôn luôn dùng tag **tự đóng** nếu không có children
```ts
// GOOD
<Foo className="stuff" />  // only have />

// BAD 
<Foo className="stuff"></Foo>
	//this have </Foo>
```

- Nếu component có thuộc tính nhiều dòng, đóng tag trên dòng mới
```ts
// GOOD 
<Foo
  className="stuff"
  id="uniqueId"
  dataAttribute="moreStuff"
/>

//BAD 
<Foo
  className="stuff"
  id="uniqueId"
  dataAttribute="moreStuff"/>

```

# Nên sử dụng arrow function thay vì dùng từ khóa function  
good
```ts 
const getUser = () => {
    // logic
}
```
bad
```ts
function getUser() {
    // logic
}
```

# Import
- Import theo thứ tự: utils, styles, fonts, contexts, hooks, components, pages

```ts
//utils
import { lazy, Suspense, useEffect, useRef } from 'react'
//styles
import '@styles/index.scss'
import ThemeStyles from '@styles/theme'
//contexts
import { SidebarProvider } from '@contexts/sidebarContext'
import { ThemeProvider } from 'styled-components'
//hooks
import { ThemeContextType, useTheme } from '@contexts/themeContext
import { Route, Routes, useLocation } from 'react-router-dom'
import { useWindowSize } from 'react-use'
//conponents
import Loader from '@components/Loader'
import AppBar from '@layout/AppBar'
import { ToastContainer } from 'react-toastify'
//pages
const Login = lazy(() => import('@pages/Login'))
```

# Handler Method

- Đặt tên method theo cú pháp: `"handle" + triggering event`. 
	- exp: handleClick

> IMPORTANT: Sử dụng arrow function để đảm bảo 'this' luôn trỏ đến context đúng

# Tên Function
- camelCase
- không dùng số
- không dùng kí tự đặc biệt
```
bad: get_user, get-user
good: getUser
```

# Tương tác FE và BE
- Tương tác json thì property phải viết snake_case để phân biệt với property của Class
bad
```json
{
    entityProperty: 'value'
}
```

good
```json
{
	entity_property: 'value' 
}
```

exp
```json 
{
    "status": 200,
    "message": "success",
    "data": {
        "user_id": "123",   
        "user_name": "John Doe",     
    }
}
```
# Tên Folder (entity)
- camelCase
- không dùng số ở kí tự đầu tiên
- không dùng kí tự đặc biệt
```
bad: User, User-Report, User_Report, UserReport
good: user, userReport, userReport
```

# Tên File
- camelCase
```
bad: Users, products.Controller, ...
good: user.middleware.ts, userReport.middleware.ts, product.controller.ts
```    

# Tên Class
- PascalCase
- không dùng số
- không dùng kí tự đặc biệt
```
bad: user, userReport, user_report
good: User, UserReport
```
# Properties của Class
- camelCase 
- không dùng số 
- không dùng kí tự đặc biệt
```
bad: user_id, user_name, user-name
good: userId, userName
```
# Tên enum
- UPPER_CASE
``` ts
export enum USER_ROLE {
    ADMIN,
    STAFF,
    STUDENT
}
```


# Function Documentation
- sau mỗi lần update function phải cập nhật version
```ts
/**
 * Kiểm tra xem một số có phải là số nguyên tố hay không.
 * @param {number} num - Số cần kiểm tra.
 * @returns {boolean} - True nếu số nguyên tố, false nếu không phải.
 * @example isPrime(5)
 * @description
 * Hàm này kiểm tra xem số được cung cấp có phải là số nguyên tố hay không.
 * Số nguyên tố là số chỉ chia hết cho 1 và chính nó.
 * @author [Tên tác giả]
 * @version 0.0.1
 */
function isPrime(num) {
  // Logic kiểm tra số nguyên tố ở đây
  // ...
}
```

# Route
- phải 
```ts
/*
desc: add new course
method: POST
path: /course/add-new-course
headers: {
		params: ... (có hoặc không)
		query: ... (có hoặc không)
		Authorization: Bearer <access_token>
}
body: AddNewCourseReqBodyType (syntax feature+ReqBodyType)
*/
courseRouter.post(
	'/add-new-course',
	accessTokenValidator,
	checkRole([UserRole.Admin]),
	addNewCourseMiddleware,
	addNewCourseController
)
export default courseRouter
```

# Ngoại lệ

