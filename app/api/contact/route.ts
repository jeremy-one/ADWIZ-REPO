import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nom, email, entreprise, telephone, sujet, message } = body;

    // Validation des champs requis
    if (!nom || !email || !sujet || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      );
    }

    // Préparer le contenu de l'email
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          Nouveau message de contact - ADWIZ
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #007bff; margin-top: 0;">Informations du contact :</h3>
          <p><strong>Nom :</strong> ${nom}</p>
          <p><strong>Email :</strong> ${email}</p>
          ${entreprise ? `<p><strong>Entreprise :</strong> ${entreprise}</p>` : ''}
          ${telephone ? `<p><strong>Téléphone :</strong> ${telephone}</p>` : ''}
          <p><strong>Sujet :</strong> ${sujet}</p>
        </div>
        
        <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
          <h3 style="color: #333; margin-top: 0;">Message :</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 14px;">
          <p>Ce message a été envoyé depuis le formulaire de contact du site ADWIZ.</p>
          <p>Date d'envoi : ${new Date().toLocaleString('fr-FR')}</p>
        </div>
      </div>
    `;

    // Envoyer l'email
    const { data, error } = await resend.emails.send({
      from: 'ADWIZ Contact <onboarding@resend.dev>',
      to: ['darmajock@gmail.com'],
      subject: `Nouveau contact - ${sujet}`,
      html: emailContent,
      replyTo: email,
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email envoyé avec succès',
        data 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur serveur:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
} 