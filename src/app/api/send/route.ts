import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const Token = process.env.RESEND_TOKEN;
const resend = new Resend(Token);

export async function POST(req: NextRequest) {
    const { nome, cognome, email, paese, provincia, citta, dataCerimonia, storia } = await req.json();

    try {
        await resend.emails.send({
            from: 'Maranzana <onboarding@resend.dev>',
            to: 'maranzanafotografia@gmail.com',
            subject: 'Photograph',
            text: `
                Nome: ${nome}
                Cognome: ${cognome}
                E-mail: ${email}
                
                Paese: ${paese}
                Provincia: ${provincia}
                Città: ${citta}
                Data della cerimonia: ${dataCerimonia}
                
                Storia: ${storia}
            `
        });
        return NextResponse.json({ message: 'Formulario enviado con éxito' }, { status: 200 });
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        return NextResponse.json({ error: 'Error al enviar el formulario' }, { status: 500 });
    }
}