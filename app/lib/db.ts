// file added as per https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices

import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
    // rather than calculating and creating these properties/values on the frontend, use Prisma
    // to generate them on-the-fly
    return new PrismaClient().$extends({
        result: {
            patient: {
                full_name: {
                    needs: { first_name: true, last_name: true },
                    compute(patient) {
                        return `${ patient.first_name } ${ patient.last_name }`
                    }
                },
            },
            visit: {
                administration_location_displayable: {
                    needs: { administration_location: true },
                    compute(visit) {
                        return visit.administration_location === 'inhome' ? "In Home" : "Hospital"
                    }
                },
                medication_tolerance_displayable: {
                    needs: {medication_tolerance: true },
                    compute(visit) {
                        switch(visit.medication_tolerance) {
                            case 1:
                                return "Terrible";
                            case 2:
                                return "Bad";
                            case 3:
                                return "Neutral";
                            case 4:
                                return "Good";
                            case 5:
                                return "Great";
                        }
                    }
                }
            }
        }
    })
}

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma