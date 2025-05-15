import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: No token provided",
      });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    if (!decode) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: Token verification failed",
      });
    }

    req.id = decode.userId;

    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export default isAuthenticated;
