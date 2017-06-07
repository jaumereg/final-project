JAUME REGAS FINAL PROJECT SKYLAB CODERS BOOTCAMP

# Padel Match Features

## Add Match

```
curl -X POST --data "location=Barcelona&court=Tennis Vallparc&date=27/11/2017&hour=11:27&price=27&levelFrom=B+&levelTo=A&gender=mixed&team1Left=Jaume Regas&team1Right=Berta Rodes&team2Left=empty&team2Right=empty" localhost:3000/api/matches
```

## Get All Matches 

```
curl localhost:3000/api/matches
```


## Remove Match

```
curl -X DELETE localhost:3000/api/match/5936c5a734b8ef04ece26b69
```

## Update Match

```
curl -X PUT --data "location=Gava&court=Tennis Pineda" localhost:3000/api/match/5937ae1b879b842f00329fb2
```