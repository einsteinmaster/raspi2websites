# How to Install
## Preparation
### Configure and Compile
Place the `dev/` configuration file in `dev/public_html`.
Basic Structure:
```
{
  "password": "example",
  "layout_files": [
    {
      "key": "lay1",
      "name": "test_layout.json"
    }
  ],
  "database": {
    "server": "db",
    "username": "root",
    "password": "example",
    "db": "webspace"
  },
  "rkpsearch": {
    "database": {
      "server": "db",
      "username": "root",
      "password": "example",
      "db": "rkparticles"
    }
  }
}
```
Create `.env` File with Structure:
```
DB_ROOT_PW=example
```
Here you set the MySql Root Password.

Compile Static React Site. Install `react`, `reactdom` and `reactscript` via `npm`. Run `npm run build` in `dev/react-tutorial/`.

### Copy Data
Copy HeysteimkeWindows ClickOnce Deploy in `heysteimke/heysteimkewindows`.

Copy RKP-Search ClickOnce Deploy in `rkpsearch/data`.

Copy SteimkeBioladen-APK in `steimkebioladen/data`.

## Run
run `docker-compose up -d` on commandline
