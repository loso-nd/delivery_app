import React, {useState, useEffect} from 'react'
import HomeCard from "../components/HomeCard";
import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 80px
`
function Home({user}) {
    const [companies, setCompanies] = useState([]);
  
   // const API_PATH = `http://localhost:3001/companies`
  
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/companies');
      const companies = await res.json();
      setCompanies(companies)
    }
    fetchData()
  },[])
  
    return (
      <div className="home">
          <h1>Home</h1>
          <Grid>
          {companies.map((company) => (
            <HomeCard   
                key={company.id}
                company={company}
                companies={companies}
                setCompanies={setCompanies}
                user={user}
            />
          ))}
          </Grid>
      </div>
    )
}
export default Home