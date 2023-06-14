import { React, useState, useEffect } from "react";
import { Dropdown, Input, Text } from "@nextui-org/react";
import { ExchangeStyle, ChipStyle, InputStyle } from "./styled";
import { useGetVSCoinsQuery } from "../../src/services/ExchangeApi";
import { useGetExchangeQuery } from "../../src/services/CoinsApi";
import { Chip } from "@mui/material";
export const Exchange = () => {
  const [amount, setAmount] = useState("1");
  const [open, setOpen] = useState(true);
  const [have, setHave] = useState("btc");
  const [get, setGet] = useState("usd");
  const [result, setResult] = useState(null);
  const { data: coins, isLoading: coinsLoading } = useGetVSCoinsQuery();
  const response = [have, get];
  const { data: exchange, isLoading: exchangeLoading } = useGetExchangeQuery(response);
  const handleHave = (value) => {
    setHave(value);
  };
  const handleGet = (value) => {
    setGet(value);
  };

  const handleClick = (event) => {
    setAmount((amount) => amount + event.target.value);
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
      <Text h1>Exchange Coins</Text>
      <Text >From:</Text>
      <ChipStyle>
        {coins?.map((text) => (
          <Chip label={text} className="chip" onClick={() => handleHave(text)} clickable key={text} variant={have == text ? 'filled' : 'outlined'} />
        )
        )}
      </ChipStyle>
      <InputStyle>
        <Input
          bordered
          defaultValue={"1"}
          type='number'
          value={amount}
          pattern="\d*"
          size='xl'
          min={0}
          onChange={(e) => setAmount(e.target.value)} fullWidth className="exchangeInput" aria-label="from-coin" />
      </InputStyle>
      <Text >to:</Text>
      <ChipStyle>
        {coins?.map((text) => (
          <Chip label={text} className="chip" onClick={() => handleGet(text)} clickable key={text} variant={get == text ? 'filled' : 'outlined'} />
        )
        )}
      </ChipStyle>
      <InputStyle>
        <Input
          size='xl'
          value={
            exchange !== null && exchange !== undefined && exchange !== ""
              ? Object.values(exchange)[0] * amount
              : null
          } readOnly fullWidth className="exchangeInput" bordered aria-label="to-coin" />
      </InputStyle>
    </ExchangeStyle>
  );
};
