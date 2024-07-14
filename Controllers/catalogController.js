const Catalog = require("../DataModels/catalogModel");

// Get a specific catalog by ID
const getCatalog = async (req, res) => {
  try {
    const { catalogId } = req.params;
    const catalog = await Catalog.findOne({ Catalog_ID: catalogId });
    if (!catalog) {
      return res.status(404).json({ error: "Catalog not found" });
    }
    return res.status(200).json(catalog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all catalogs
const getAllCatalogs = async (req, res) => {
  try {
    const catalogs = await Catalog.find();
    return res.status(200).json(catalogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new catalog
const createCatalog = async (req, res) => {
  try {
    const {
      Organization_ID,
      Catalog_ID,
      Catalog_Name,
      Category_ID,
      Category_Name,
      Sub_Category_ID,
      Sub_Category_Name,
      Active_Catalog, // this is expected to be a boolean in the request
    } = req.body;

    // Convert the boolean Active_Catalog to a Buffer
    const activeCatalogBuffer = Buffer.from([Active_Catalog ? 1 : 0]);

    const newCatalog = new Catalog({
      Organization_ID,
      Catalog_ID,
      Catalog_Name,
      Category_ID,
      Category_Name,
      Sub_Category_ID,
      Sub_Category_Name,
      Active_Catalog: activeCatalogBuffer, // store the buffer
    });

    const savedCatalog = await newCatalog.save();
    res.status(201).json(savedCatalog);
  } catch (error) {
    console.error("Error saving catalog:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCatalog,
  getAllCatalogs,
  createCatalog,
};
