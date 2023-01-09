import {
  Input,
  Select,
  Typography,
  MenuItem,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  ButtonGroup,
  Button,
} from "@mui/material";
import { React, useState, useEffect } from "react";
import { ExchangeStyle, ExchangeLine, ButtonLine, NumpadContainer } from "./styled";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { useGetVSCoinsQuery } from "../../src/services/ExchangeApi";
import { useGetExchangeQuery } from "../../src/services/CoinsApi";
import BackspaceIcon from '@mui/icons-material/Backspace';

export const Exchange = () => {
  const [amount, setAmount] = useState("1");
  const [have, setHave] = useState("btc");
  const [get, setGet] = useState("usd");
  const [result, setResult] = useState(null);
  const { data: coins, isLoading: coinsLoading } = useGetVSCoinsQuery();
  const response = [have, get];
  const { data: exchange, isLoading: exchangeLoading } =
    useGetExchangeQuery(response);
  const handleHave = (event) => {
    setHave(event.target.value);
  };
  const handleGet = (event) => {
    setGet(event.target.value);
  };

  const handleClick = (event) => {
    setAmount((amount) => amount + event.target.value);
  };
  const handleDelete = () => {
    setAmount((amount) => {
      if (amount.length > 0) {
        return amount.slice(0, -1);
      } else {
        return amount;
      }
    });
  };
  useEffect(() => {
    if (
      exchange !== null &&
      exchange !== undefined &&
      exchange !== "" &&
      !exchangeLoading
    ) {
      setResult(exchange);
    }
  }, [get, have]);

  return (
    <ExchangeStyle>
      <Typography className="title" variant="h5" fontWeight={700}>
        Exchange
      </Typography>
      <ToggleButtonGroup className="toggle_group">
        <ToggleButton>Buy</ToggleButton>
        <ToggleButton>Sell</ToggleButton>
      </ToggleButtonGroup>
      <Paper className="bg_paper">
        <ExchangeLine>
          <Input
            sx={{ fontSize: "18px" }}
            defaultValue={"1"}
            type="string"
            className="send"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            onKeyDown={(e) => e.preventDefault()}
          />
          <Select
            disableUnderline
            variant="standard"
            value={have}
            onChange={handleHave}
          >
            {coins
              ? coins.map((coin, index) => {
                return (
                  <MenuItem value={coin} key={index}>
                    {coin}
                  </MenuItem>
                );
              })
              : null}
          </Select>
        </ExchangeLine>
        <ExchangeLine>
          <Input
            sx={{ fontSize: "18px" }}
            readOnly
            value={
              exchange !== null && exchange !== undefined && exchange !== ""
                ? Object.values(exchange)[0] * amount
                : null
            }
          />
          <Select
            variant="standard"
            disableUnderline
            value={get}
            onChange={handleGet}
          >
            {coins
              ? coins.map((coin, index) => {
                return (
                  <MenuItem value={coin} key={index}>
                    {coin}
                  </MenuItem>
                );
              })
              : null}
          </Select>
        </ExchangeLine>
      </Paper>

      <NumpadContainer>
        <ButtonGroup className="numpad">
          <ButtonLine>
            <Button disableElevation variant="contained" value="1" onClick={handleClick}>
              1
            </Button>
            <Button disableElevation variant="contained" value="2" onClick={handleClick}>
              2
            </Button>
            <Button disableElevation variant="contained" value="3" onClick={handleClick}>
              3
            </Button>
          </ButtonLine>
          <ButtonLine>
            <Button disableElevation variant="contained" value="4" onClick={handleClick}>
              4
            </Button>
            <Button disableElevation variant="contained" value="5" onClick={handleClick}>
              5
            </Button>
            <Button disableElevation variant="contained" value="6" onClick={handleClick}>
              6
            </Button>
          </ButtonLine>
          <ButtonLine>
            <Button disableElevation variant="contained" value="7" onClick={handleClick}>
              7
            </Button>
            <Button disableElevation variant="contained" value="8" onClick={handleClick}>
              8
            </Button>
            <Button disableElevation variant="contained" value="9" onClick={handleClick}>
              9
            </Button>
          </ButtonLine>
          <ButtonLine>
            <Button disableElevation variant="contained" value="." onClick={handleClick}>
              .
            </Button>
            <Button disableElevation variant="contained" value="0" onClick={handleClick}>
              0
            </Button>
            <Button disableTouchRipple disableRipple disableFocusRipple disableElevation variant="contained" onClick={handleDelete}><BackspaceIcon /></Button>
          </ButtonLine>
        </ButtonGroup>
      </NumpadContainer>
    </ExchangeStyle>
  );
};
