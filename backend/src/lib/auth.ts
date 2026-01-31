import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),

    trustedOrigins: process.env.APP_URL ? [process.env.APP_URL!] : [],

    session: ({
    cookie: {
      name: "better-auth.session_token",
      sameSite: "lax",
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    },
  }as unknown) as any,
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "STUDENT",
        required: false,
      },
      phone: {
        type: "string",
        required: false,
      },
      status: {
        type: "string",
        defaultValue: "ACTIVE",
        required: false,
      },
    },
  },

    emailAndPassword: {
        enabled: true,
        autoSignIn: false,
    requireEmailVerification: false,
    },
    
     emailVerification: {
    sendOnSignUp: false, 
    autoSignInAfterVerification: true,
  },
});