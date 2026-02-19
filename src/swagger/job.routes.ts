/**
 * @swagger
 * /jobs:
 *   post:
 *     summary: Create a new job role
 *     tags: [Jobs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - country
 *               - minExperience
 *               - minLanguageScore
 *             properties:
 *               title:
 *                 type: string
 *               country:
 *                 type: string
 *               minExperience:
 *                 type: integer
 *               minLanguageScore:
 *                 type: number
 *     responses:
 *       201:
 *         description: Job created successfully
 */
