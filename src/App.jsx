import './App.css'

function App() {
  return (
    <div className="App">
      <BottomNavigation
  showLabels
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
>
  <BottomNavigationAction label="Trending" icon={<RestoreIcon />} />
  <BottomNavigationAction label="Exchange" icon={<FavoriteIcon />} />
  <BottomNavigationAction label="Profile" icon={<LocationOnIcon />} />
</BottomNavigation>
    </div>
  )
}

export default App
