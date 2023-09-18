import Nav from './components/Nav'
import Category from './components/Category'
import Menu from './components/Menus'
import { GetServerSideProps, NextPage } from "next";
import instance from "./api/axios";
import requests from "./api/listrequests";


export async function getServerSideProps(){
  const request = await instance.get(requests.fetchProduct);
  const data = await request.json();
  console.log(data);
  return {
      props: {}
  }
}


const Home: any = ((e: object) => {
  return (
    <div>
      <Nav />
      <Menu />
      <Category  data={getServerSideProps}/>
    </div>
  );
}
)

export default Home;