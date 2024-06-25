---
marp: true
theme: uncover
_class: invert
paginate: true
---

<style>
  :body {
    --color-highlight: #EE0000;
    --color-highlight-hover: #aaf;
    --color-highlight-heading: #EE0000;
    --color-header: #bbb;
    --color-header-shadow: transparent;
  }
  h1 {
    font-size: 1.5em;
    color: ;
  }
  h2 {
    font-size: 1.2em;
    color: #;
    text-align: left
  }
  h3 {
    font-size: 1.0em;
    color: #;
    text-align: left
  }
  p {
  text-align: left;
  }
</style>

# **COURS WEB ET MOBILE AVANCEE**

## Ousman GNALY

### Universite Islamique au Niger

---

# ***HTTP implementation***

---

## Implemetation de tous les methodes dans note notre Architecture

---

# ***GET - Récupérer des données***

---

**Router** :

``` typescript
router.get('/users/:id', userController.getUserById);
```

---

***Controller*** :

``` typescript
const userController = {
    getUserById: async (req, res) => {
        const userId = req.params.id;
        const user = await userService.getUserById(userId);
        res.json(user);
    }
};

```

---
***Service*** :

``` const userService = {
    getUserById: async (id) => {
        return await userDao.getById(id);
    }
};
```

---
***DAO*** :

``` const userDao = {
    getById: async (id) => {
        return await prisma.user.findUnique({ where: { id: parseInt(id) } });
    }
};

```


---

# ***POST - Créer une nouvelle ressource***

---

**Router** :

``` typescript
router.post('/users', userController.createUser);
```

---

***Controller*** :

``` typescript
const userController = {
    createUser: async (req, res) => {
        const userData = req.body;
        const newUser = await userService.createUser(userData);
        res.json(newUser);
    }
};


```

---
***Service*** :

``` typescript
const userService = {
    createUser: async (data) => {
        return await userDao.create(data);
    }
};

};
```

---
***DAO*** :

``` typescript
const userDao = {
    create: async (data) => {
        return await prisma.user.create({ data });
    }
};


```
