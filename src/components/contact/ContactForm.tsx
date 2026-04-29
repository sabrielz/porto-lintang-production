"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Nama tidak boleh kosong"),
  email: z.string().email("Format email tidak valid"),
  company: z.string().optional(),
  serviceOfInterest: z.enum(['lintang_production', 'am_lighting', 'videotron', 'lainnya']),
  message: z.string().min(5, "Pesan terlalu singkat (minimal 5 karakter)"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      serviceOfInterest: 'lintang_production',
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      const result = await res.json();
      if (result.success) {
        toast.success("Pesan Berhasil Terkirim!", {
          description: "Tim Lintang Production akan segera menghubungi Anda.",
        });
        reset();
      } else {
        toast.error("Gagal Mengirim Pesan", {
          description: result.error || "Terjadi kesalahan sistem.",
        });
      }
    } catch (e) {
      toast.error("Terjadi Kesalahan", {
        description: "Tidak dapat terhubung ke server.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full bg-zinc-900/50 text-white border-0 border-b-2 border-white/10 px-0 py-3 focus:ring-0 focus:border-primary transition-all duration-300 placeholder:text-white/30";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">Nama Anda</label>
          <input 
            {...register("name")} 
            type="text" 
            placeholder="John Doe" 
            className={inputClasses}
          />
          {errors.name && <p className="text-red-400 text-xs mt-2">{errors.name.message}</p>}
        </div>
        <div>
          <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">Email Address</label>
          <input 
            {...register("email")} 
            type="email" 
            placeholder="john@company.com" 
            className={inputClasses}
          />
          {errors.email && <p className="text-red-400 text-xs mt-2">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">Perusahaan / Instansi</label>
          <input 
            {...register("company")} 
            type="text" 
            placeholder="(Opsional) PT Kreatif Nusantara" 
            className={inputClasses}
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">Layanan yang Dibutuhkan</label>
          <select 
            {...register("serviceOfInterest")} 
            className={`${inputClasses} appearance-none cursor-pointer`}
          >
            <option value="lintang_production">Dokumentasi (Lintang Production)</option>
            <option value="am_lighting">Lighting Panggung (AM Lighting)</option>
            <option value="videotron">Layar Videotron</option>
            <option value="lainnya">Lainnya / Bundling Khusus</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">Pesan / Detail Kebutuhan</label>
        <textarea 
          {...register("message")} 
          rows={4}
          placeholder="Ceritakan gambaran besar dari event yang ingin Anda selenggarakan..." 
          className={`${inputClasses} resize-none`}
        />
        {errors.message && <p className="text-red-400 text-xs mt-2">{errors.message.message}</p>}
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-blue-600 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        {isSubmitting ? (
          <Loader2 className="w-5 h-5 animate-spin mr-2" />
        ) : (
          <Send className="w-5 h-5 mr-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
        )}
        Kirim Pesan
      </button>
    </form>
  );
}
