import { useState } from "react";
import "./App.css";
import { Card, CardContent, Typography } from '@mui/material';
import Spline from "@splinetool/react-spline";

function App() {
  const [showInfo, setShowInfo] = useState(false);

  const handleSplineClick = () => {
    setShowInfo(!showInfo);
  }

  return (
    <>
      <div>
        <Spline scene="https://prod.spline.design/jrpDaAqGedLPhlUo/scene.splinecode" onClick={handleSplineClick} />
      </div>
      {showInfo && 
        <Card sx={{ position: 'absolute', right: 0, top: 0 }}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              French Fries
            </Typography>
            <Typography variant="h5" component="h2">
              Some information about french fries...
            </Typography>
          </CardContent>
        </Card>
      }
    </>
  );
}

export default App;
