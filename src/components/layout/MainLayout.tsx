import { Layout, Menu} from 'antd';
const {Sider,Content, Footer, Header } = Layout
import { Outlet } from 'react-router-dom';
import { adminSidebarItems } from '../../routes/admin.routes';

// const items : MenuProps['items'] = [
//   {
//     //unique key
//     key:"Dashboard",
//     label:<NavLink to="/admin/dashboard">Dashboard</NavLink>
//   },
//   {
//     key:"User Management",
//     label:"User Management",
//     children:[
//       {
//         //unique key
//         key:"Create Admin",
//         label:<NavLink to="/admin/create-admin">Create Admin</NavLink>
//       },
//       {
//         key:"Create Faculty",
//         label:<NavLink to="/admin/create-faculty">Create Faculty</NavLink>
//       },
//       {
//         //unique key
//         key:"Create Student",
//         label:<NavLink to="/admin/create-student">Create Student</NavLink>
//       },
      

//     ]
//   },
// ]

const MainLayout = () => {
  return (
    <div>
      <Layout style={{height:"100vh"}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{color:'white',
  
          height:'4rem',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'}}>
        <h1>PH University</h1>
         </div>
      
        <Menu 
        theme="dark" 
         mode="inline"
         defaultSelectedKeys={['4']} items={adminSidebarItems} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0}} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            
            }}
          >
           <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>

    </div>
  )
}

export default MainLayout
