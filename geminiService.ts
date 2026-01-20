
import { GoogleGenAI } from "@google/genai";

export async function generateParentChildImage(
  base64Image: string,
  themeName: string,
  mode: string
): Promise<string | null> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    const prompt = `Based on this photo, create a premium commercial-grade advertisement poster for 'Jinlingguan' infant milk formula.
    Theme: ${themeName}.
    Artistic Style: 
    - High-end scientific aesthetic with a deep cosmic blue background.
    - Surround the subjects with a translucent glowing 'Protective Shield' made of subtle hexagonal grids and cyan light orbits.
    - Add glowing nutrient spheres (labeled 'OPN', 'Lactoferrin') floating elegantly in the background.
    - Professional studio lighting that emphasizes a warm, safe bond between parent and child.
    - The final image should look like a high-end magazine ad for premium baby products. 
    - Subject preservation: Ensure the faces of the people in the photo remain recognizable but are artistically integrated into the scene.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview', // Upgraded to Pro for high-quality ad look
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image,
              mimeType: 'image/jpeg',
            },
          },
          { text: prompt },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "9:16",
          imageSize: "1K"
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
}
