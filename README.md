JAUME REGAS FINAL PROJECT SKYLAB CODERS BOOTCAMP

# Padel Match Features

## Add Match

```
curl -X POST --data "location=Barcelona&court=Tennis Vallparc&date=27/11/2017&hour=11:27&price=27€&levelFrom=B+&levelTo=A&gender=mixed&team1Left=Jaume Regas&team1Right=Berta Rodes&team2Left=empty&team2Right=empty" localhost:3000/api/matches
```

## Get All Matches 

```

```


## Remove Match

```

```

## Update Match

```

```

# Pizza App

## Add Pizzas

```
    curl -X POST --data "name=CHEESE PIZZA&description=Classic marinara sauce topped with mozzarella cheese.&image=https://www.pizzahut.com/assets/w/tile/thor/Cheese.png" localhost:3000/pizzas

    curl -X POST --data "name=PEPPERONI PIZZA&description=Mozzarella cheese and pepperoni.&image=https://www.pizzahut.com/assets/w/tile/thor/pepperoni.png" localhost:3000/pizzas

```

## Get All Pizzas 

```
    curl localhost:3000/pizzas
```


## Remove Pizza

```
    curl -X DELETE localhost:3000/pizza/593515e497637fe91422a9d2
```

## Update Pizza

```
    curl -X PUT --data "name=PIZZA 4 QUESOS" localhost:3000/pizza/59351820a38462ec408d15d1
```